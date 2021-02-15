---
id: towny
title: Towny
sidebar_label: Towny
---
ADK's main plugin for protection of grief is the Towny plugin, a popular plugin that allows claiming of land, and teamwork between players.


:::tip
For a list of towny commands, see [here](https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands)
:::

---
## Town Upkeep
One of the customizations ADK has is the economic impact of towns. In order to stay running, towns must pay their daily upkeep which is determined by player count. This chart explains the configuration we use:

![img](static/img/townychart.png)

---
## Town Ranks
Towny provides different ranks a mayor can give to their residents, giving them perms to help out around the town. These ranks and their permissions are as follows:

- Mayor - Owner of the town, has full control and access to all commands
- Co-Mayor - Similar to mayor, has access to all commands **except** selecting a new mayor or deleting the town
- Manager - Has full control over plot types and plot management/claiming.
- Recruiter - Has permissions to recruit players to the town and put plots up for sale
- Sheriff - Can add outlaws and send residents to jail
- Architect - Can build in all plots claimed by the town
- Worker - Can only build in public plots, no resident-claimed plots like the Architect
- Exempt - Not affected by town taxes