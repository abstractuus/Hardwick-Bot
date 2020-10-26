const Discord = require('discord.js');

exports.run = async (Client, message, args, tools) => {

  if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '251397854562746368') return message.channels.send({embed: {
    color: 14059054,
    description: ("You do not have permission to create a poll.(Manage Server permission needed).")
    }});

  if (!args.join(' ')) {

    const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Error:**", "Please add the topic of the poll.")
        .addField("**Usage:**", "+poll <topic>")
        .setFooter("Hardwick™")

    message.channel.send(error);

      return;
  }

  const embed = new Discord.MessageEmbed()
    .setTitle(args.join(' '))
    .setThumbnail("https://www.realclearpolitics.com/dev/mt-static/images/nav_icon.png")
    .setFooter('React to vote on Poll!')
    .setColor(15724786)
    const pollTitle = await message.channel.send({ embed });
      await pollTitle.react(`✅`);
      await pollTitle.react(`⛔`);

      const one = new Discord.MessageEmbed()
      .setColor("FFFFFF")
      .setThumbnail("https://www.realclearpolitics.com/dev/mt-static/images/nav_icon.png")
      .addField("**Results:**", `Collected ${collected.size} ✅`) `Collected ${collected.size} ⛔`
      .setFooter("Hardwick™")

      const two = new Discord.MessageEmbed()
      .setColor("FFFFFF")
      .setThumbnail("https://www.realclearpolitics.com/dev/mt-static/images/nav_icon.png")
      .addField("**Results:**", `Collected ${collected.size} ⛔`)
      .setFooter("Hardwick™")

    const filter = (reaction) => reaction.emoji.name === '✅';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => message.channel.send(one));


    const filter1 = (reaction) => reaction.emoji.name === '⛔';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => message.channel.send(two));
};
