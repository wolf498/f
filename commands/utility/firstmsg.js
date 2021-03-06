const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "firstmsg",
  aliases: ["firstmessage"],
  description: "Gives you first message of channel!",
  usage: `rex firstmsg`,
  timeout: 4000,
  userPermissions: [""],
  botPermissions: [""],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    message.noMentionReply(
      new MessageEmbed()
        .setTitle(`First Messsage in ${message.guild.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription("Content: " + msg.content)
        .addField("Author", msg.author, true)
        .addField("Message ID", msg.id, true)
        .addField("Created At", message.createdAt.toLocaleDateString(), true)
    );
  },
};
