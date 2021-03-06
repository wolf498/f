const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nowplaying", // Optional
  aliases: ["np"], // Optional
  category: "Music",
  description:
    "Gives info about the song that its being played and the progress of it",
  usage: "rex nowplaying",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);
    let progressBar = client.player.createProgressBar(message, {
      size: 20,
      block: "▬",
      arrow: "🔘",
    });
    let song = await client.player.nowPlaying(message);
    const bar = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`${song.name}`)
      .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      .setDescription(`⋆ Requested by ${message.author}
            \`${progressBar}\``);

    if (progressBar) message.noMentionReply(bar);
  },
};
