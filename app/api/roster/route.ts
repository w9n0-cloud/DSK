import { NextResponse } from "next/server";

type DiscordMember = {
  user: { id: string; username: string; global_name?: string; avatar?: string; bot?: boolean };
  nick?: string;
  roles: string[];
};

type RosterGroup = {
  title: string;
  roleId: string;
};

async function fetchAllMembers(guildId: string, token: string) {
  const all: DiscordMember[] = [];
  let after = "0";
  const limit = 1000;

  while (true) {
    const res = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}/members?limit=${limit}&after=${after}`,
      {
        headers: { Authorization: `Bot ${token}` },
        cache: "no-store",
      }
    );
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Discord API error: ${res.status} ${text}`);
    }
    const chunk: DiscordMember[] = await res.json();
    all.push(...chunk);
    if (chunk.length < limit) break;
    after = chunk[chunk.length - 1].user.id;
  }
  return all;
}

const ROLE_GROUPS = {
  elite: {
    label: "DSK Élite",
    groups: [
      {
        title: "Co-leader",
        roleId: "1323416473951141889|1323334837779828900",
      },
      { title: "Chef", roleId: "1365124297164722257" },
      { title: "Officier", roleId: "1324328422545297499" },
      { title: "Membre", roleId: "1334751445383380993" },
    ] as RosterGroup[],
  },
  chill: {
    label: "DSK Chill",
    groups: [
      { title: "Chef", roleId: "1359554202866814977" },
      { title: "Officier", roleId: "1358928515193508040" },
      { title: "Membre", roleId: "1332302662699319350" },
    ] as RosterGroup[],
  },
};

function avatarUrl(member: DiscordMember) {
  const { user } = member;
  if (user.avatar) {
    const ext = user.avatar.startsWith("a_") ? "gif" : "png";
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
  }
  const discrim = Number(user.id) >> 22;
  const defaultId = discrim % 6;
  return `https://cdn.discordapp.com/embed/avatars/${defaultId}.png`;
}

function displayName(member: DiscordMember) {
  return member.nick || member.user.global_name || member.user.username;
}

export async function GET() {
  const token = process.env.DISCORD_BOT_TOKEN;
  const guildId = process.env.DISCORD_GUILD_ID;

  if (!token || !guildId) {
    return NextResponse.json(
      { error: "Missing DISCORD_BOT_TOKEN or DISCORD_GUILD_ID" },
      { status: 500 }
    );
  }

  try {
    const members: DiscordMember[] = await fetchAllMembers(guildId, token);

    const order = ["Chef", "Co-leader", "Officier", "Membre"];

    const buildRoster = (groups: RosterGroup[]) =>
      groups.map((group) => {
        const roleIds = group.roleId.split("|");
        const eligible = members
          .filter((m) => !m.user.bot)
          .filter((m) => m.roles.some((r) => roleIds.includes(r)));

        const higherRoleIds = groups
          .filter((g) => order.indexOf(g.title) < order.indexOf(group.title))
          .map((g) => g.roleId.split("|"))
          .flat();

        const membersFiltered = eligible.filter(
          (m) => !m.roles.some((r) => higherRoleIds.includes(r))
        );

        return {
          title: group.title,
          members: membersFiltered.map((m) => ({
            id: m.user.id,
            name: displayName(m),
            avatar: avatarUrl(m),
          })),
        };
      });

    return NextResponse.json({
      elite: { label: ROLE_GROUPS.elite.label, groups: buildRoster(ROLE_GROUPS.elite.groups) },
      chill: { label: ROLE_GROUPS.chill.label, groups: buildRoster(ROLE_GROUPS.chill.groups) },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected error", details: (error as Error).message },
      { status: 500 }
    );
  }
}
