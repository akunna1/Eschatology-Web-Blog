"use client";

import Image from "next/image";

// Defining the interface for the claim data
interface ClaimData {
  claim: string;
  bibleVerses: string;
  religiousSource?: "Tanakh" | "Talmud" | "Hadith" | "Quran"; // Explicit religious sources
  religiousVerses?: string;
  commentary: string;
  column: "left" | "right"; // Specifying the column (left or right)
}

const ClaimCard = ({
  claim,
  bibleVerses,
  religiousSource,
  religiousVerses,
  commentary,
}: ClaimData) => {
  return (
    <div className="bg-gray-50 p-4 shadow-md mb-7">
      <div className="mb-2">
        <p className="font-bold">Claim: <span className="font-normal">{claim}</span></p>        
      </div>

      <div className="mb-2">
        <p className="font-bold">Bible: <span className="font-normal">{bibleVerses}</span></p>
      </div>

      {religiousSource && religiousVerses && (
        <div className="mb-2">
          <p className="font-bold">{religiousSource}: <span className="font-normal">{religiousVerses}</span></p>
        </div>
      )}

      <div className="mb-2">
        <p className="font-bold">Commentary:<span className="font-normal"> {commentary}</span></p>
      </div>
    </div>
  );
};

export default function Attest() {
  // Defining the cards with unique content and include the 'column' field
  const claimData: ClaimData[] = [
    // Cards for 'Christian Vs Judaism Eschatology'
    {
      claim: "Both expect a Messiah to return",
      bibleVerses: "\"Then will appear the sign of the Son of Man in heaven. And then all the peoples of the earth will mourn when they see the Son of Man coming on the clouds of heaven, with power and great glory.\" - Matthew 24:30 (NIV), Revelation 19:11-16, Acts 1:11, etc. ",
      religiousSource: "Tanakh", // Can be Tanakh or Talmud
      religiousVerses:"\"And a shoot shall grow out of the stock of Jesse, a twig shall sprout from his roots. The spirit of the LORD shall alight upon him...\" - Yeshayahu  11:1-16 (JPS), Yirmeyahu  23:5-6, Daniel  7:13-14, etc.",
      commentary: "In Christianity, Jesus Christ is regarded as the Messiah who will return to establish God’s Kingdom on Earth. In contrast, Judaism anticipates the arrival of a human Messiah who will usher in divine rule and rebuild the Temple in Jerusalem. While Jesus holds central significance in Christianity, he is not recognized in Judaism due to doubts surrounding his lineage, his failure to rebuild a physical Temple, the absence of power and glory attributed to his reign, and his crucifixion, which is perceived as a criminal's death. Jesus came from a modest background, which did not meet Jewish expectations of a mighty, warrior king like David or Solomon—powerful, wealthy, and triumphant. Christians, however, view Jesus as the fulfillment of the Temple, believing that through him, God's presence and reign are established. Notably, Jesus prophesied the destruction of the Second Temple, saying: \"Not one stone here will be left on another; every one will be thrown down.\" - Matthew 24:2 (NIV), a prophecy fulfilled when the Romans destroyed the Temple years later, in 70 AD.",
      column: "left" // Specify the column
    },
    {
      claim: "Both believe their God will bring about the final judgement and redemption",
      bibleVerses: "\"And I saw the dead, great and small, standing before the throne, and books were opened. Another book was opened, which is the book of life. The dead were judged according to what they had done as recorded in the books.\" - Revelation 20:12 (NIV), Matthew 25:31-32, Romans 2:6-8, etc.",
      religiousSource: "Tanakh", // Can be Tanakh or Talmud
      religiousVerses: "\"I beheld till thrones were placed, and one that was ancient of days did sit; His raiment was white as snow, and the hair of His head like pure wool; His throne was fiery flames, and the wheels thereof burning fire. A fiery stream issued and came forth from before Him; thousands upon thousands ministered unto Him, and ten thousand times ten thousand stood before Him; the judgment was set, and the books were opened.\" - Daniel 7:9-10 (JPS), Yeshayahu  66:15-16, Yechezkel  36:26-27, etc.",
      commentary: "Christianity can be challenging to understand because of the relationship between Jesus Christ and God. Christians believe that Jesus is both fully human and fully divine while also being distinct from God the Father. This is explained by the doctrine of the Trinity, which teaches that God is one in essence but exists as three distinct persons: the Father, the Son, and the Holy Spirit. Because of this, Jesus shares the same divine nature as God and plays a central role in God’s work, including final judgment and redemption. In contrast, in Judaism, God is understood as a singular, indivisible being.",
      column: "left"
    },
    {
      claim: "Both believe in the resurrection of the dead by their God",
      bibleVerses: "\"In a flash, in the twinkling of an eye, at the last trumpet. For the trumpet will sound, the dead will be raised imperishable, and we will be changed.\" - 1 Corinthians 15:52 (NIV), John 5:28-29, etc.",
      religiousSource: "Talmud", // Can be Tanakh or Talmud
      religiousVerses: "\"In the World to Come, the Holy One, Blessed be He, will resurrect the dead and exact judgment upon the nations. The righteous will be rewarded with eternal life.\" - Sanhedrin 91a, \"The dead will rise in the time of the Messiah... and will live again.\" - Sotah 11a, etc.",
      commentary: "In Judaism, the resurrection of the dead includes both the righteous and the wicked, but the fate of the wicked is unclear, with some traditions suggesting they face judgment or punishment. The resurrection is believed to be carried out by their God, who will bring the dead back to life at the time of the Messiah’s arrival. In Christianity, the righteous are resurrected to eternal life by Jesus Christ, while the wicked face judgment and eternal separation from God, as Christ is seen as the one who will judge the living and the dead.",
      column: "left"
    },
    {
      claim: "Both expect a transformed world under their God's leadership, his global acknowledgement and the ultimate defeat of evil",
      bibleVerses: "\"That at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.\" - Philippians 2:10-11 (NLT), \"The wolf shall dwell with the lamb, and the leopard shall lie down with the young goat, and the calf and the lion and the fattened calf together; and a little child shall lead them. The cow and the bear shall graze; their young shall lie down together; and the lion shall eat straw like the ox. The nursing child shall play over the hole of the cobra, and the weaned child shall put his hand on the adder's den. They shall not hurt or destroy in all my holy mountain; for the earth shall be full of the knowledge of the Lord as the waters cover the sea.\" - Isaiah 11:6-9 (ESV), Revelation 21:1-4, Micah 4:1-4, etc.",
      religiousSource: "Talmud", // Can be Tanakh or Talmud
      religiousVerses: "\"In the future, the Holy One, blessed be He, will bring forth a new light for the righteous... and will transform the world to a state of peace and good deeds.\" - Sanhedrin 99a, \"In the future, the Holy One, Blessed be He, will remove all the idols and their worship from the world.\" - Sanhedrin 98a, \"In the future, the Holy One, Blessed be He, will eradicate all the evil from the world.\" - Berakhot 34b, \"In the world to come, there will be no eating or drinking, no procreation or business, no jealousy or rivalry. The righteous will sit with their crowns on their heads and delight in the radiance of the divine presence.\" - Berakhot 34b, etc.",
      commentary: "Both traditions share the hope for peace, justice, and harmony under God’s reign, envisioning a time when God's authority will be universally acknowledged. In Judaism, this is often referred to as the Messianic Age, a time when the Messiah will establish peace, end suffering, and bring about a just world where God’s law is fully observed. This period will see the restoration of Israel, the healing of nations, and a world free from war and oppression. Christianity shares a similar hope, anticipating the return of Jesus Christ as the Messiah to establish God's Kingdom on earth. Christians believe that during Christ’s reign, peace and justice will be fully realized, as He judges the living and the dead, bringing final victory over sin and evil. Both traditions look forward to a time of divine rule that transcends human strife and division, when God's will is perfectly carried out, bringing eternal peace and harmony to creation. In this unified vision, all nations will recognize the sovereignty of God, and the earth will be restored to a state of righteousness and fulfillment.",
      column: "left"
    },
    {
      claim: "Both believe in the restoration of Israel",
      bibleVerses: "\"And so all Israel will be saved, as it is written: The deliverer will come from Zion; he will turn godlessness away from Jacob.\" - Romans 11:26 (NIV), Ezekiel 37:21-22, etc.",
      religiousSource: "Tanakh", // Can be Tanakh or Talmud
      religiousVerses: "\"For, lo, the days are coming, says the LORD, when I will reverse the captivity of My people Israel and Judah, says the LORD, and I will bring them back to the land that I gave to their ancestors, and they shall possess it.\" - Yirmiyahu 30:3 (JPS), Yeshayahu 11:11-12, Yeshayahu 2:2-4, etc.",
      commentary: "Both Judaism and Christianity believe in the restoration of Israel and a future era of global peace. However, Christianity teaches that believers, as part of spiritual Israel, do not need to physically return to Israel, as the Kingdom of God is experienced through faith in Christ.",
      column: "left"
    },
    {
      claim: "Both anticipate the rebuilding of the Temple in Jerusalem as part of end-times prophecy",
      bibleVerses: "\"He opposes and exalts himself against every so-called god or object of worship, so that he takes his seat in the temple of God, proclaiming himself to be God.\" - 2 Thessalonians 2:4 (ESV), Revelation 11:1-2, etc.",
      religiousSource: "Tanakh", // Can be Tanakh or Talmud
      religiousVerses: "\"And say to him: Thus says the Lord of hosts: Behold, the man whose name is the Branch, for He shall branch out from His place, and He shall build the temple of the Lord. It is He who shall build the temple of the Lord and shall bear royal honor, and shall sit and rule on His throne. And He shall be a priest on His throne, and the counsel of peace shall be between them both.\" - Zechariah 6:12-13 (JPS), Yezeikel 37:26-28, etc.",
      commentary: "While Judaism looks forward to the Messiah's role in this restoration of the Temple in Jerusalem, Christians believe the Temple will be used to showcase the Antichrist's reign before the return of Christ. In the Bible, it was prophesized that there will be a Third Temple as shown in 2 Thessalonians 2:4 and Revelation 11:1-2. The Second Temple was not standing when John had the visions recorded in the book of Revelation. The Second Temple was destroyed by the Romans in 70 AD, during the reign of Emperor Titus, long before John received the visions, which are believed to have occurred around 95-96 AD during the reign of Emperor Domitian.",
      column: "left"
    },
    {
      claim: "Both emphasize a gathering of their God's people from across the world to unite them",
      bibleVerses: "\"And he will send out his angels with a loud trumpet call, and they will gather his elect from the four winds, from one end of heaven to the other.\" - Matthew 24:31 (ESV), etc.",
      religiousSource: "Tanakh", // Can be Tanakh or Talmud
      religiousVerses: "\"Say to them: Thus said the Lord GOD: I am going to take the Israelite people from among the nations they have gone to, and gather them from every quarter, and bring them to their own land.\" - Yehezkel 37:21 (JPS), Yeshayahu 43:5-6, etc.",
      commentary: "Both Judaism and Christianity emphasize the belief that in the last days, their God will gather His people from across the world, but the purposes for this gathering differ. In Judaism, the gathering is seen as a return to the promised land, where the Jewish people will experience divine restoration and live under God's rule, with the coming of the Messiah bringing peace and fulfillment of God's covenant. In Christianity, the gathering focuses on the resurrection of the righteous and the establishment of God's eternal kingdom, with believers being united with Christ in a new heaven and earth. While both traditions share a hope for divine unity, their visions for this gathering reflect distinct understandings of their God's ultimate plan.",
      column: "left"
    },
    {
      claim: "Both expect intense suffering and chaos before the Messiah arrives",
      bibleVerses: "\"I watched as he opened the sixth seal. There was a great earthquake. The sun turned black like sackcloth made of goat hair, the whole moon turned blood red, and the stars in the sky fell to earth.\" - Revelation 6:12–14 (NIV), Luke 21:25–26, Matthew 24:6–8, etc.",
      religiousSource: "Tanakh", // Can be Tanakh or Talmud
      religiousVerses: "\"You shall advance against My people Israel like a cloud covering the earth. It shall be at the end of days, and I will bring you against My land, that the nations may know Me when I am sanctified through you, O Gog, before their eyes.\" - Yehezkel 38:16 (JPS), Yeshayahu 13:9, Yehezkel 30:3, Yoel 2:30–31, Zekharyah 14:1–2, etc.",
      commentary: "Both faiths expect great tribulation to precede divine intervention, which serves as a reminder that hope and deliverance come after the darkest of times. In Judaism, major signs include the gathering of the Jewish people to Israel, the rebuilding of the Temple in Jerusalem, and the arrival of a true messiah, while minor signs involve suffering, wars, and moral decay before the Messiah’s arrival. Similarly, in Christianity, major signs leading to Christ’s second coming include false prophets, wars, famines, natural disasters, and the rise of the Antichrist, with minor signs involving moral decay, persecution, and apostasy. In both traditions, this period of tribulation is seen as a time of testing, where the faithful endure hardships, but divine intervention will ultimately restore peace and justice, as their God’s sovereignty is fully realized and His eternal reign established.",
      column: "left"
    },
    {
      claim: "Both anticipate spiritual deception before the Messiah comes",
      bibleVerses: "\"For false messiahs and false prophets will appear and perform great signs and wonders to deceive, if possible, even the elect.\" - Matthew 24:24 (NIV), \"But the beast was captured, and with it the false prophet who had performed the signs on its behalf. With these signs, he had deluded those who had received the mark of the beast and worshiped . The two of them were thrown alive into the fiery lake of burning sulfur.\" - Revelation 19:20 (NIV), etc.",
      religiousSource: "Talmud", // Can be Tanakh or Talmud
      religiousVerses: "\"There will be an increase in sorcery and heresy before the Messiah comes.\" - Berakhot 34b, \"Before the coming of the Messiah, insolence will increase, the vine will yield its fruit, yet wine will be expensive, and the government will turn to heresy.\" - Avodah Zarah 3b, etc.",
      commentary: "Judaism expects deception through false prophets and nations opposing Israel before the Messiah. Christianity anticipates many false prophets, but in the last days, the Antichrist and a notable False Prophet will be the key players leading many astray before Christ's return.",
      column: "left"
    },
    {
      claim: "Both describe a future, perfected Jerusalem as part of the end times",
      bibleVerses: "\"He carried me away in the Spirit to a mountain great and high, and showed me the Holy City, Jerusalem, coming down out of heaven from God. It shone with the glory of God, and its brilliance was like that of a very precious jewel, like a jasper, clear as crystal. It had a great, high wall with twelve gates, and with twelve angels at the gates. On the gates were written the names of the twelve tribes of Israel. There were three gates on the east, three on the north, three on the south and three on the west. The wall of the city had twelve foundations, and on them were the names of the twelve apostles of the Lamb.\" - Revelation 21:10-14 (NIV), etc.",
      religiousSource: "Tanakh", // Can be Tanakh or Talmud
      religiousVerses: "\"For, behold, I create new heavens and a new earth; and the former things shall not be remembered, nor come into mind. But be ye glad and rejoice forever in that which I create; for, behold, I create Jerusalem a rejoicing, and her people a joy.\" - Yeshayahu 65:17-18 (JPS), etc.",
      commentary: "They both describe a future Jerusalem that will be the center of their God's reign and blessing in the end times. This city will be a place of peace, divine presence, and restoration. In Judaism and Christianity, everything begins and ends in the Middle East, with Jerusalem as the focal point, where God chose the Israelites to carry out His divine purpose and where Jesus’ mission started and where His return to establish God’s Kingdom will occur.",
      column: "left"
    },
    {
      claim: "Both prophesy a final, apocalyptic war involving Gog and Magog before peace is established",
      bibleVerses: "\"When the thousand years come to an end, Satan will be let out of his prison. He will go out to deceive the nations—called Gog and Magog—in every corner of the earth. He will gather them together for battle—a mighty army, as numberless as sand along the seashore.\" - Revelation 20:7-8 (NLT), Ezekiel 38:2-4, etc.",
      religiousSource: "Talmud", // Can be Tanakh or Talmud
      religiousVerses: "\"The war of Gog and Magog will precede the days of the Messiah. There will be no clear sign for its arrival, and it will happen suddenly.\" - Sanhedrin 97b, \"In the future, Gog and Magog will rise against the Holy One, Blessed be He, but they will be defeated by the fire He will send.\" - Avodah Zarah 3b, etc.",
      commentary: "In Jewish eschatology, Gog and Magog are nations that rise against Israel in the end times but are destroyed by God. Some see this as a war before the Messianic Age, a future era of global peace and divine rule led by the Messiah, while others view it as part of the final judgment. In Christian eschatology, Gog and Magog lead a rebellion after Christ's thousand-year reign but are consumed by fire from heaven. After this, the dead are resurrected for the Great White Throne Judgment, where God judges all who were not part of the first resurrection. The first resurrection happens when Jesus returns to reign with the righteous for 1,000 years, following the defeat of the Antichrist and false prophet at the Battle of Armageddon. This resurrection is for the faithful, who will rule with Christ during the Millennium. After the Millennium, the second resurrection occurs, where the dead who did not participate in the first resurrection are judged at the Great White Throne Judgment. This marks the final judgment, with the unrighteous cast into the lake of fire. While both traditions see them as forces of evil, Judaism places the battle before the Messianic Age, while Christianity sees it as the final rebellion before the last judgment.",
      column: "left"
    },


    // Cards for 'Christian Vs Islamic Eschatology'
    {
      claim: "Both believe a global world human leader will arise is the last days to establish a one world religion, and he will rule for 7 years",
      bibleVerses: "\"The ruler will make a treaty with the people for a period of one set of seven, but after half this time, he will put an end to the sacrifices and offerings. And as a climax to all his terrible deeds, he will set up a sacrilegious object that causes desecration, until the fate decreed for this defiler is finally poured out on him.\" - Daniel 9:27 (NLT), Revelation 13:7, 2 Thessalonians 2:3-4, Revelation 13:5, etc.",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"The Prophet said: The Mahdi will be of my family, of the descendants of Fatimah. Allah will rectify him in a single night. He will fill the Earth with equity and justice as it was filled with oppression and tyranny, and he will rule for seven years.\" - Sunan Abu Dawood 4282, \"The Prophet  said: The Mahdi will appear among my Ummah. Allah will send him to make people prosperous. People will be blessed with livestock and will cultivate plenty of crops. He will give wealth generously. He will rule for seven years.\" - Musnad Ahmad 10898, etc.",
      commentary: "This global world leader is known as the Antichrist in the Bible and is known to Muslims as the Al-Mahdi. In Shia Islam, particularly within the Twelver sect, the Mahdi is believed to be the 12th Imam. He is believed to be from the lineage of the Prophet Muhammad, specifically through Fatimah, the Prophet's daughter. He is prophesied to unite the Muslim Ummah (community) and lead them in battles against injustice and tyranny. According to Sunni Islam (i.e., the majority of Muslims), his name will be Muhammad ibn Abdullah, while Shia Islam refers to him as Muhammad ibn Hasan. In Arabic, ibn or bin means \"son of.\" The name Abdullah means \"servant of Allah,\" with Allah being the Muslims' God. There are different variations of the name Abdullah. On the other hand, the name Hasan, or Hassan, means \"handsome,\" \"good,\" or \"beautiful,\" reflecting both physical and moral excellence.",
      column: "right"
    },
    {
      claim: "Both believe in the emergence of a deceiver, who many will flock to during the last days",
      bibleVerses: "\"The beast was given a mouth to utter proud words and blasphemies and to exercise its authority for forty-two months. It opened its mouth to blaspheme God, and to slander his name and his dwelling place and those who live in heaven. It was given power to wage war against God’s holy people and to conquer them. And it was given authority over every tribe, people, language, and nation. All inhabitants of the earth will worship the beast—all whose names have not been written in the Lamb’s book of life, the Lamb who was slain from the creation of the world.\" - Revelation 13:5-8 (NIV), Revelation 13:1-4, etc.",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"The Prophet said: The Dajjal will be one-eyed and will have a mark on his forehead. He will claim to be a god and will deceive many people.\" - Sahih al-Bukhari 7130, \"The Messenger of Allah (peace be upon him) said: There is no trial greater than the Dajjal, from the time of Adam until the last hour.\" - Sunan Abu Dawood 4329, Sahih Muslim 6922, etc.",
      commentary: "Both Christianity and Islam speak of a deceiver in the last days, but they are not the same figure. In Christianity, the deceiver is the Antichrist, also known as the Beast out of the Sea in Revelation, who is anti-Christianity. In Islam, the deceiver is the Dajjal, who is anti-Islam. A truly devouted Muslim cannot be pro-Christianity, and a truly devouted Christian cannot be pro-Islam. That being said, what if the Dajjal is both anti-Islam and pro-Christianity, and the Antichrist is anti-Christianity and pro-Islam? Would that be surprising? Keep that question in mind as you continue reading.",
      column: "right"
    },
    {
      claim: "Both believe their God will bring about the final judgement and redemption",
      bibleVerses: "\"When the Son of Man comes in his glory, and all the angels with him, he will sit on his glorious throne. All the nations will be gathered before him, and he will separate the people one from another as a shepherd separates the sheep from the goats.\" - Matthew 25:31-32 (NIV), Revelation 20:11-12, Romans 14:10-12, etc.",
      religiousSource: "Quran", // Can be Hadith or Quran
      religiousVerses: "\"On that Day, people will depart in different groups to be shown their result. So whoever does an atom’s weight of good will see it, and whoever does an atom’s weight of evil will see it.\" - Surah Al-Zalzalah (99:6-8), Surah Al-Imran (3:185), etc.",
      commentary: "Both Christianity and Islam teach that their God will bring about the final judgment, but in Christianity, this will be through Jesus Christ (John 5:22-23), while in Islam, it will be through Allah (Quran 22:7). The God of Christianity loves all people and died as Jesus for humanity's sins so that they can enter paradise, while in Islam, Allah, did not die for anyone, but instead requires His followers to die in Jihad for Him in order to enter paradise (Quran 9:111). Additionally, Allah is not viewed as a Trinity, in contrast to the Christian understanding of God as Father, Son (i.e., Jesus), and Holy Spirit. These differences in addition to many others demonstrate that Allah and God are not the same.",
      column: "right"
    },
    {
      claim: "Both believe that they will be someone who will raise the dead in the last days",
      bibleVerses: "\"Do not be amazed at this, for a time is coming when all who are in their graves will hear his voice and come out—those who have done what is good will rise to live, and those who have done what is evil will rise to be condemned.\" - John 5:28-29 (NIV), 1 Thessalonians 4:16, Revelation 20:12-13, etc.",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"The Dajjal will come, and it will be said that he will stop the rain, and some of the people will be unable to get enough food and water. He will have control over the rain and the crops, and people will follow him out of desperation.\" -  Sahih al-Bukhari 7131, \"The Dajjal will be followed by a large number of people... He will claim to be God and will perform miracles, such as raising the dead, to deceive people into believing his false claims.\" - Sahih Muslim 2937, Sahih Muslim 157, Sahih Muslim 7091, etc.",
      commentary: "In the Bible, Jesus Christ raised people from the dead, demonstrating His divine authority over life and death. According to Christian eschatology, Jesus is expected to raise the dead at the end of times. Islam, which emerged about 600 years after Christianity, acknowledges Jesus's ability to raise the dead and His identity as the son of Mary but denies His crucifixion. It also mentions prophets like Elijah and Elisha, who were granted the power to raise the dead by God. In Islamic eschatology, the Dajjal is the only figure who will appear and is said to possess the ability to raise the dead. If the Dajjal has such abilities, does that mean he could actually be Jesus Christ? Or is that too much of a wild guess?",
      column: "right"
    },
    {
      claim: "Both talk about the emergence of a rider on a white horse",
      bibleVerses: "\"I looked up and saw a white horse standing there. Its rider carried a bow, and a crown was placed on his head. He rode out to win many battles and gain the victory.\" - Revelation 6:2 (NLT)",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"The Mahdi is one of us, the family of the Prophet. Allah will rectify his affairs in a single night. He will appear at a time when the Muslims will be divided. He will fill the earth with justice as it was filled with oppression. He will ride a white horse.\" - Sunan Ibn Majah 4084, \"The Mahdi will appear riding on a white horse and will have the mark of a sword strike on his face.\" - Sunan Abu Dawood 4285, Sunan Ibn Majah Hadith 4082, etc.",
      commentary: "The Four Horsemen of the Apocalypse in Revelation 6 represent conquest, war, famine, and death. The rider of the fourth horse, traditionally described as \"pale,\" actually rides a green horse, as the Greek word chloros (the original language of the New Testament) means green, symbolizing decay, disease, and widespread death. This translation error has led to several misinterpretations. White, Red, Black, Green. Those are the colors of the Islamic Brotherhood flag, by the way. In addition to Palestine, UAE, Somaliland, Western Sahara, Syria, Libya, Kuwait, Jordan, Sudan, and Iraq, which are all Islamic nations. Could that just be a coincidence? Many Christians also argue that the rider on the white horse is the Antichrist because he is imitatating Jesus Christ who is believed will come down from Heaven on a white horse to put an end to all the chaos going on in the world as detailed in Revelation 19:11-16.",
      column: "right"
    },
    {
      claim: "Both believe the global human leader will have great political and military power",
      bibleVerses: "\"The coming of the lawless one will be in accordance with how Satan works. He will use all sorts of displays of power through signs and wonders that serve the lie.\" - 2 Thessalonians 2:9-10 (NIV), \"People worshiped the dragon because he had given authority to the beast, and they also worshiped the beast and asked, \"Who is like the beast? Who can wage war against it?\" The beast was given a mouth to utter proud words and blasphemies and to exercise its authority for forty-two months.\" - Revelation 13:4-7 (NIV), Revelation 13:2, etc.",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"He will have great political and military power. He will lead the Muslims to a great victory and will fulfill the prophecy of a just ruler in the end times.\" - Sunan Abu Dawood 4282, \"The Mahdi will have the support of heaven. He will fight against those who oppose Islam, and the victory will be granted to him.\" - Sunan Abu Dawood 4284, Sunan Ibn Majah 4085, etc.",
      commentary: "The Mahdi will unite Muslims, fight against those who oppose Islam, and implement Sharia law worldwide. This will involve a strong opposition to non-Islamic religions, particularly Christianity and Judaism, where followers will either be forced to convert to Islam or face severe consequences, including death. In contrast, 2 Thessalonians 2:3 speaks of Christianity's great apostasy in the last days, while Islam is predicted to draw in an increasing number of followers.",
      column: "right"
    },
    {
      claim: "Both believe the global leader will be accompanied by an influential assistant",
      bibleVerses: "\"Then I saw a second beast, coming out of the earth. It had two horns like a lamb, but it spoke like a dragon. It exercised all the authority of the first beast on its behalf, and made the earth and its inhabitants worship the first beast, whose fatal wound had been healed. And it performed great signs, even causing fire to come down from heaven to the earth in full view of the people. Because of the signs it was given power to perform on behalf of the first beast, it deceived the inhabitants of the earth. It ordered them to set up an image in honor of the beast who was wounded by the sword and yet lived.\" - Revelation 13:11-14 (NIV), \"At that time if anyone says to you, \"Look, here is the Messiah!\" or \"There he is!\" do not believe it. For false messiahs and false prophets will appear and perform great signs and wonders to deceive, if possible, even the elect.\" - Matthew 24:23-24 (NIV), etc.",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"The Mahdi will be from my family, from the descendants of Fatimah, and Jesus son of Mary will descend to the earth... He will be with the Mahdi and fight against the false messiah (the Dajjal).\" - Sunan Ibn Majah 4085, \"By Him in Whose Hand my soul is, the son of Maryam (Isa) will shortly descend among you people (Muslims) as a just ruler... He will break the cross, kill the swine, and abolish the jizyah. Allah will destroy all religions except Islam, and he will kill the Dajjal.\" - Sahih Muslim 2933, etc. ",
      commentary: "In the Bible, Jesus is the only person described as the Lamb, the Lamb of God, symbolizing His innocence and sacrifice. Based on Revelation 13's description, the false prophet (i.e., the Beast out of the Earth) is depicted as a mimicry of Jesus, a literal wolf in sheep's clothing. The false prophet's actions parallel those of Jacob in Genesis 27:1-40, where he pretended to be Esau to deceive his father, Isaac, in order to receive his brother's blessing. In this analogy, the blessing is synonymous with the salvation of the people on earth. Muslims believe in Jesus too, a Muslim Jesus, a prophet of Allah, whom they call Isa. Isa is believed to return as a radical Muslim to assist the Mahdi in establishing Islamic dominance. A new version of Jesus, who emerged about six centuries later interestingly. Furthermore, in Islam, pigs are considered impure, and eating pork is forbidden. The act of \"killing the swine\" can be seen as a symbolic statement about the eradication of impurity when Isa returns. However, it's noteworthy to mention that in the Quran, certain disobedient groups, particularly some Jews, are metaphorically referred to as apes or swine due to their violation of God's commands. For instance, in Surah Al-Baqarah (2:65), a group of Jews who broke the Sabbath are called apes, while in Surah Al-Ma’idah (5:60), those who worshiped false gods are described as being transformed into apes and swine.",
      column: "right"
    },
    {
      claim: "Both believe a non-human creature will arise, which will mark people in the last days",
      bibleVerses: "\"The second beast was given power to give breath to the image of the first beast, so that the image could speak and cause all who refused to worship the image to be killed. It also forced all people, great and small, rich and poor, free and slave, to receive a mark on their right hands or on their foreheads, so that they could not buy or sell unless they had the mark, which is the name of the beast or the number of its name.\" - Revelation 13:15-17 (NIV)",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"The Beast will emerge and place a mark on the faces of the people. There will be so many people marked that it will be known who is a believer and who is a disbeliever.\" - Sunan Abu Dawood 4310 (Book 37), Jami` at-Tirmidhi 3186,  Sahih Muslim 110 (Book 54), etc.",
      commentary: "Verse 16 of Revelation 13 states, \"It also forced all people, great and small, rich and poor, free and slave, to receive a mark on their right hands or on their foreheads.\" This verse refers to the image, not the Second Beast (i.e., the False Prophet) as is popularly believed. Something that is given breath, can speak, and enforces worship mimics human form and intelligence, much like Artificial Intelligence (AI) with robot features. In biblical and historical contexts, idols and images were often seen as representations of deities with real spiritual powers. For example, in Daniel 3, King Nebuchadnezzar’s golden statue demanded worship, and refusal to worship it led to execution. Once the image is given breath, it becomes an independent enforcer, and nothing in the grammar of Revelation 13:16 suggests that the Second Beast takes back control. The Second Beast is called the Beast out of the Earth in Revelation. Similarly, in Islamic eschatology, there is a creature called Dabbat al-Ard, the \"Beast of the Earth\", which doesn’t match the description of the Bible’s false prophet, but it aligns with the Bible’s description of the false prophet’s AI creature. Dabbat al-Ard is said to be a creature that will emerge from the earth, speak to humanity, and mark individuals based on their faith, with disbelievers marked by a dark sign of rejection.",
      column: "right"
    },
    {
      claim: "Both prophesy a final, apocalyptic war involving Gog and Magog before peace is established",
      bibleVerses: "\"After many days you will be called to arms. In future years you will invade a land that has recovered from war, whose people were gathered from many nations to the mountains of Israel, which had long been desolate. They had been brought out from the nations, and now all of them live in safety. You and all your troops and the many nations with you will go up, advancing like a storm; you will be like a cloud covering the land.\" -  Ezekiel 38:8-9, Revelation 20:7-8, etc.",
      religiousSource: "Hadith", // Can be Hadith or Quran
      religiousVerses: "\"On the Day of Judgment, Allah will say, ‘O Adam, bring forth (your descendants) to Hell.’ He will say, ‘O Lord, how many?’ Allah will say, ‘Out of every thousand, 999 will go to Hell and one will go to Paradise.’ That day will be so severe that children will turn gray-haired, and it was said, ‘Who will that one be?’ He said, ‘Be glad, for among Gog and Magog, there will be 999, and among you, one.\" - Sahih al-Bukhari 3348, \"Gog and Magog are digging through the barrier every day until they can almost see sunlight. Then their leader says, ‘Go back, and we will finish tomorrow.’ But Allah restores it stronger than before. When their appointed time comes, their leader will say, ‘Go back, and we will finish tomorrow, if Allah wills.’ This time, they will find the barrier as they left it, and they will break through and emerge to corrupt the earth.\" - Sunan Ibn Majah 4080, Sahih Muslim 2937a, Sahih Muslim 2937b, etc.",
      commentary: "Gog and Magog (Ya’juj wa Ma’juj) are a major sign of the Last Day in both Islamic and Biblical eschatology. In Islam, they are a corrupt people once contained behind a barrier built by Dhul-Qarnayn, a Muslim ruler and righteous figure, who tirelessly attempts to prevent their devastation. They try to break free every day until Allah allows their release at the appointed time. Their destruction comes through divine intervention, with a plague wiping them out. Similarly, in the Bible, Gog leads a force from the land of Magog to invade Israel in the Last Days, but is destroyed by God's fire (Ezekiel 38-39). In Revelation 20, Gog and Magog symbolize nations led by Satan in a final rebellion, ultimately being defeated by God. Both accounts highlight their role as agents of destruction that will ultimately be vanquished by God's power.",
      column: "right"
    },
 
    // Add more cards as needed
  ];

  return (
    <div className="px-6 py-3">
      <div className="text-center mb-6">
        <div className="border-t-2 border-black my-4"></div>
        <p className="uppercase text-md font-black">Eschatology Comparison</p>
        <div className="border-t-2 border-black my-4"></div>
      </div>

      <div className="relative w-full h-105">
        <Image
          src="/photos/apo.jpg"
          alt="Apo"
          fill // replaces layout="fill"
          className="object-cover"
          priority
        />
        <p className="times-new-roman absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-white font-bold text-xl md:text-2xl lg:text-3xl text-center p-2">
        In the final days, what belief will draw millions of Christians away? Could it be Islam or Judaism, which many see as similar? Or perhaps something else? Here, the truth is laid bare.
        </p>
      </div>

      <div className="mt-6 lg:mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 border-t-2 lg:border-t-0 border-black">
          <p className="times-new-roman text-xl mb-4 text-center font-bold">Christian Vs Judaism Eschatology</p>
          {/* Render cards for the left column */}
          {claimData
            .filter((claim) => claim.column === "left")
            .map((claim, index) => (
              <ClaimCard
                key={index}
                claim={claim.claim}
                bibleVerses={claim.bibleVerses}
                religiousSource={claim.religiousSource}
                religiousVerses={claim.religiousVerses}
                commentary={claim.commentary}
                column={claim.column} // Passing the column value to the ClaimCard
              />
            ))}
        </div>

        <div className="p-4 lg:pl-8 border-t-2 lg:border-t-0 lg:border-l-2 border-black">
          <p className="times-new-roman text-xl mb-4 text-center font-bold mt-6 lg:mt-0">Christian Vs Islamic Eschatology</p>
          {/* Rendering cards for the right column */}
          {claimData
            .filter((claim) => claim.column === "right")
            .map((claim, index) => (
              <ClaimCard
                key={index}
                claim={claim.claim}
                bibleVerses={claim.bibleVerses}
                religiousSource={claim.religiousSource}
                religiousVerses={claim.religiousVerses}
                commentary={claim.commentary}
                column={claim.column} // Passing the column value to the ClaimCard
              />
            ))}
        </div>
      </div>
    </div>
  );
};
