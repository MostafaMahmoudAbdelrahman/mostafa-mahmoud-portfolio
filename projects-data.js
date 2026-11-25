/*
  Featured work — content file for the home-page gallery.
  Each project = one object.
  - cats: filter tabs it appears under ("mobile" | "vr" | "web" | "unreal")
  - badge: the category label on the card; mono + hue draw the hexagon badge
  - yt: YouTube id played in the details window
  - thumb / preview / shots: paths under resources/
*/
window.PROJECTS = [
  {
    id: "muhakah", featured: 1, cover: "resources/games/muhakah-cover.webp", logo: "resources/games/muhakah-logo.webp", shots: ["resources/shots/muhakah-1.webp", "resources/shots/muhakah-2.webp", "resources/shots/muhakah-3.webp"], yt: "7PShgJCUrtw", cats: ["unreal"], badge: "UE5", mono: "MU", hue: 32,
    name: "Muhakah", award: "1st Place",
    tagline: "Hackathon-winning social simulation in Unreal Engine 5",
    desc: "A social simulation game built in Unreal Engine 5 for the Arab Youth Hackathon, organised by the Arab Youth Center in the UAE. Our demo won 1st Place and an AED 350,000 prize and was showcased at the World Governments Summit 2026 in Dubai. The team is now founding Studio Ajaib around the project, and development continues beyond the demo.",
    highlights: [
      "1st Place and AED 350,000 prize at the Arab Youth Hackathon",
      "Showcased at the World Governments Summit 2026 in Dubai",
      "Learned Unreal Engine in a two-month Futuregames program on building a complete game and founding a studio"
    ],
    spec: { Engine: "Unreal Engine 5 · C++", Platform: "PC", Role: "Co-Founder & Lead Simulation Engineer", Studio: "Studio Ajaib", Year: "2026" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/muhakah.mp4"
  },
  {
    id: "duroob", featured: 2, cover: "resources/games/duroob-cover.webp", logo: "resources/games/duroob-logo.webp", shots: ["resources/shots/duroob-1.webp", "resources/shots/duroob-2.webp", "resources/shots/duroob-3.webp"], yt: "2r_f0n-oBtU", cats: ["mobile", "vr"], badge: "Mobile + VR", mono: "DM", hue: 40,
    name: "Duroob Al-Majd", award: "Shipped",
    tagline: "Endless runner for touch screens, ported to Meta Quest",
    desc: "An Android endless runner for interactive touchscreen displays, with Gulf-dressed characters and trivia-question pauses mid-run, set at the entrance to Riyadh with an Arabian-desert theme and backed by Unity Cloud. Shipped on Google Play, then ported to a Meta Quest VR version and published on the Meta Store.",
    highlights: [
      "Trivia questions pause the run and reward correct answers",
      "Backend and content on Unity Cloud",
      "Ported from Android to Meta Quest VR and published on both stores"
    ],
    spec: { Engine: "Unity · C#", Platform: "Android · Meta Quest", Role: "Unity Developer", Studio: "RMG", Year: "2024" },
    links: [["Google Play", "https://play.google.com/store/apps/details?id=com.RMG.duroobalmajd"], ["Meta Quest Store", "https://www.meta.com/experiences/9097137060321303/"]], preview: "resources/previews/duroob.mp4"
  },
  {
    id: "cowboy", featured: 4, cover: "resources/games/cowboy-cover.webp", logo: "resources/games/cowboy-logo.webp", shots: ["resources/shots/cowboy-1.webp", "resources/shots/cowboy-2.webp", "resources/shots/cowboy-3.webp"], yt: "1SGmFMsQ4pg", cats: ["mobile"], badge: "Mobile", mono: "WC", hue: 24,
    name: "Wild West Cowboy", award: "Live-service",
    tagline: "Mobile FPS aimed entirely with the gyroscope",
    desc: "A mobile FPS with gyroscope-only controls: tilt to aim, tilt up to fire, tilt down to reload. It ships a full live-service feature set and is visually 3D but art-directed to read as 2D.",
    highlights: [
      "Gyroscope-only aiming, firing and reloading",
      "Royal Pass (battle pass), store, notifications, friends and chat",
      "One-to-one voice chat during battle; friendly, AI and PvP modes",
      "Built the payment gateway for Royal Pass purchases"
    ],
    spec: { Engine: "Unity · C#", Platform: "Android · iOS", Role: "Unity 3D Developer", Studio: "bluezone web", Year: "2021–2024" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/cowboy.mp4"
  },
  {
    id: "guardian-quest", cover: "resources/games/guardian-quest-cover.webp", logo: "resources/games/guardian-quest-logo.webp", shots: ["resources/shots/guardian-quest-1.webp", "resources/shots/guardian-quest-2.webp", "resources/shots/guardian-quest-3.webp"], yt: "gN4NSc6PGlQ", cats: ["mobile"], badge: "Mobile", mono: "GQ", hue: 200,
    name: "Guardian Quest", award: "CyberX",
    tagline: "A platform adventure where security answers open the gate",
    desc: "A 2D mobile platformer. Players pick a hero and a stage from the level map, then jump across platforms, climb ladders and ropes, collect coins and stomp enemies. Every virus box opens a multiple-choice cybersecurity question; right answers reveal the key that unlocks the exit gate, scored up to 3 stars. Six themed levels, in Arabic and English.",
    highlights: [
      "Pick your hero, then a level",
      "Move with the joystick and stomp enemies",
      "Touch a virus box and answer its question",
      "Right answers reveal the key to the gate"
    ],
    spec: { Engine: "Unity · C#", Platform: "Android", Role: "Unity Developer", Studio: "CyberX World", Year: "2024–2026" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/guardian-quest.mp4"
  },
  {
    id: "naga", featured: 3, cover: "resources/games/naga-cover.webp", logo: "resources/games/naga-logo.webp", shots: ["resources/shots/naga-1.webp", "resources/shots/naga-2.webp", "resources/shots/naga-3.webp"], yt: "868wm4pFhQQ", cats: ["vr"], badge: "VR", mono: "NG", hue: 190,
    name: "Naga", award: "CyberX",
    tagline: "Learn cybersecurity by doing, not by quizzing",
    desc: "A VR action-shooter set in a futuristic NEOM desert struck by a Cyber Storm. Digital threats become enemies, compromised devices and real traps in front of the player, who learns safe behaviour through action: scan before you touch, verify before you trust, secure and then back up.",
    highlights: [
      "Intro: the ops room reveals the attack map",
      "Ride: mount the camel and fight waves on the move",
      "Mission: enter the tent, scan devices, secure room after room",
      "Finish: hand over the backup and get your rating"
    ],
    spec: { Engine: "Unity · C#", Platform: "Meta Quest 3", Role: "Unity Developer", Studio: "CyberX World", Year: "2024–2026" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/naga.mp4"
  },
  {
    id: "threat-slicer", cover: "resources/games/threat-slicer-cover.webp", logo: "resources/games/threat-slicer-logo.webp", shots: ["resources/shots/threat-slicer-1.webp", "resources/shots/threat-slicer-2.webp", "resources/shots/threat-slicer-3.webp"], yt: "7jd3CmImBIw", cats: ["vr"], badge: "VR", mono: "TS", hue: 280,
    name: "Threat Slicer", award: "CyberX",
    tagline: "Red saber for threats, green for safe",
    desc: "Two sabers, flying security situations: hit threats with the red saber and safe items with the green one, building a combo multiplier with every correct hit. A fixed 75-second session ends with a learning recap of your mistakes and why they matter, then an event leaderboard.",
    highlights: ["Hold both sabers", "Red for threats, green for safe", "Review the learning recap"],
    spec: { Engine: "Unity · C#", Platform: "Meta Quest", Role: "Unity Developer", Studio: "CyberX World", Year: "2024–2026" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/threat-slicer.mp4"
  },
  {
    id: "firewall-fists", cover: "resources/games/firewall-fists-cover.webp", logo: "resources/games/firewall-fists-logo.webp", shots: ["resources/shots/firewall-fists-1.webp", "resources/shots/firewall-fists-2.webp", "resources/shots/firewall-fists-3.webp"], yt: "Dp_4tZeWWbQ", cats: ["vr"], badge: "VR", mono: "FF", hue: 15,
    name: "Firewall Fists", award: "CyberX",
    tagline: "Rhythm boxing: right hand for safe, left for unsafe",
    desc: "Hand-tracked rhythm boxing. A hacker throws targets labelled with security practices: punch correct practices with your right hand and wrong ones with your left. Split-second decisions make the lesson stick.",
    highlights: ["Pick a level and language", "The hacker throws attacks to the beat", "Right hand for correct practices, left for wrong ones", "Build combos; the round ends with the music"],
    spec: { Engine: "Unity · C#", Platform: "Meta Quest (hand tracking)", Role: "Unity Developer", Studio: "CyberX World", Year: "2024–2026" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/firewall-fists.mp4"
  },
  {
    id: "firewall-legion", featured: 5, cover: "resources/games/firewall-legion-cover.webp", logo: "resources/games/firewall-legion-logo.webp", shots: ["resources/shots/firewall-legion-1.webp", "resources/shots/firewall-legion-2.webp", "resources/shots/firewall-legion-3.webp"], yt: "q8-KDI15dB8", cats: ["vr"], badge: "VR", mono: "FL", hue: 18,
    name: "Firewall Legion", award: "CyberX",
    tagline: "Lead your legion through security decisions",
    desc: "An educational runner: you lead an auto-running legion along a desert road. Before each gate a security scenario appears; judge it safe or risky and steer into the right gate. Good calls grow the army, bad ones shrink it, and the legion battles enemy waves up to the final fight with the Ransomware Lord.",
    highlights: ["Read the scenario before each gate", "Steer into the right gate", "Defeat the Ransomware Lord"],
    spec: { Engine: "Unity · C#", Platform: "Meta Quest", Role: "Unity Developer", Studio: "CyberX World", Year: "2024–2026" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/firewall-legion.mp4"
  },
  {
    id: "packet-slam", cover: "resources/games/packet-slam-cover.webp", logo: "resources/games/packet-slam-logo.webp", shots: ["resources/shots/packet-slam-1.webp", "resources/shots/packet-slam-2.webp", "resources/shots/packet-slam-3.webp"], yt: "f04wYZhVRPA", cats: ["vr"], badge: "VR", mono: "PS", hue: 330,
    name: "Packet Slam", award: "CyberX",
    tagline: "Throw data packets into the right gate",
    desc: "The player is a SOC analyst. Balls are data packets and hoops are firewall gates and servers; every throw is a security decision: allow, block or report. Questions appear with answer gates, and answer streaks multiply the score.",
    highlights: ["Grab a data packet", "Read the question", "Throw it into the correct gate"],
    spec: { Engine: "Unity · C#", Platform: "Meta Quest", Role: "Unity Developer", Studio: "CyberX World", Year: "2024–2026" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/packet-slam.mp4"
  },
  {
    id: "labs-for-home", featured: 6, cover: "resources/games/labs-for-home-cover.webp", logo: "resources/games/labs-for-home-logo.webp", shots: ["resources/shots/labs-for-home-1.webp", "resources/shots/labs-for-home-2.webp", "resources/shots/labs-for-home-3.webp"], yt: "JevY-LK2rd0", cats: ["web"], badge: "Web", mono: "LH", hue: 190,
    name: "Labs for Home", award: "5 platforms",
    tagline: "100+ science experiments from one shared codebase",
    desc: "WebGL science experiments and educational simulations for UAE schools. Each experiment used to ship as its own duplicated project; I proposed and led consolidating them into one project, with each experiment an Addressable prefab loaded at runtime by a launcher, so one codebase ships across five platforms.",
    highlights: [
      "Consolidated duplicated per-experiment repos into one project",
      "Experiments as Addressable prefabs loaded at runtime",
      "Owned backend connectivity and UI across all experiments",
      "Arduino integration validating real sensor readings"
    ],
    spec: { Engine: "Unity · C#", Platform: "WebGL + 4 more", Role: "Mid Unity 3D Developer", Studio: "ARCON", Year: "2022–2024" },
    links: [["Watch: SiMinds — Atwood Machine experiment", "https://youtu.be/zwJV_gf_kG0"], ["Watch: Electrical Conductivity of Solutions", "https://youtu.be/Jr7QvLp-lNM"], ["Watch: Voltage in series & parallel resistors", "https://youtu.be/cbPL7vP0HxM"]], preview: "resources/previews/labs-for-home.mp4"
  },
  {
    id: "gvs", cover: "resources/games/gvs-cover.webp", logo: "resources/games/gvs-logo.webp", shots: ["resources/shots/gvs-1.webp", "resources/shots/gvs-2.webp", "resources/shots/gvs-3.webp"], yt: "2PvemW3d9IE", cats: ["vr"], badge: "VR", mono: "GV", hue: 215,
    name: "GVS Virtual Meetings", award: "Multiplayer",
    tagline: "A VR office for virtual meetings",
    desc: "A VR company/office simulation for virtual meetings, comparable to VRChat, with Photon multiplayer and Agora voice and screen-share. I was brought in to rescue a large, broken project and later built a VRChat demo map of the same platform.",
    highlights: [
      "Refactored a 5,000+ line API script into one reusable API utility",
      "Directed a 3D artist to rebuild all assets as modular pieces",
      "Built a private-access API for subscription-gated VRChat map access"
    ],
    spec: { Engine: "Unity · C#", Platform: "VR · PC", Role: "Senior Unity Developer (Contract)", Studio: "Global Business Strategies", Year: "2022–2025" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/gvs.mp4"
  },
  {
    id: "bvr-civil-defense", cover: "resources/games/bvr-civil-defense-cover.webp", logo: "resources/games/bvr-civil-defense-logo.webp", shots: ["resources/shots/bvr-civil-defense-1.webp", "resources/shots/bvr-civil-defense-2.webp", "resources/shots/bvr-civil-defense-3.webp"], yt: "1zyVGxXBVMg", cats: ["vr"], badge: "VR", mono: "CD", hue: 5,
    name: "Civil Defense VR", award: "Training",
    tagline: "HTC Vive training simulations",
    desc: "HTC Vive training simulations built with the VRTK library as one of two programmers: a fire-safety trainer covering three fire types, an industrial and warehouse trainer, and a firearm-tracked shooting-range sim.",
    highlights: [
      "Fire-safety trainer covering three fire types",
      "Industrial trainer: motor disassembly, fire extinguishing, forklift operation",
      "Shooting range with tracked MP5 and grenade throwing"
    ],
    spec: { Engine: "Unity · C# · VRTK", Platform: "HTC Vive", Role: "Unity VR Developer", Studio: "Bright Vision Tech", Year: "2018–2019" },
    links: [["Experience", "experience.html"]], preview: "resources/previews/bvr-civil-defense.mp4"
  },
  {
    id: "rmg-lab", cover: "resources/games/rmg-lab-cover.webp", logo: "resources/games/rmg-lab-logo.webp", shots: ["resources/shots/rmg-lab-1.webp", "resources/shots/rmg-lab-2.webp", "resources/shots/rmg-lab-3.webp"], yt: "UHVHA136GeA", cats: ["vr"], badge: "Mixed Reality",
    name: "RMG Innovation Lab", award: "Meta Store",
    tagline: "Holographic guides in a mixed-reality showroom",
    desc: "An innovation-lab experience published on the Meta Quest Store: holographic guides introduce the lab's stations, products and interactive games, mixing virtual characters with the real showroom.",
    highlights: ["Holographic guide characters placed in the real lab", "Interactive stations and touch-screen games", "Published on the Meta Quest Store"],
    spec: {"Engine": "Unity · C#", "Platform": "Meta Quest", "Role": "Unity XR Developer", "Studio": "RMG", "Year": "2024–2026"},
    links: [["Meta Quest Store", "https://www.meta.com/experiences/rmg-lab/9123235517790926/"]], preview: "resources/previews/rmg-lab.mp4"
  },
  {
    id: "riyadh-smart-city", cover: "resources/games/riyadh-smart-city-cover.webp", logo: "resources/games/riyadh-smart-city-logo.webp", shots: ["resources/shots/riyadh-smart-city-1.webp", "resources/shots/riyadh-smart-city-2.webp", "resources/shots/riyadh-smart-city-3.webp"], yt: "O-VkmmcZUxs", cats: ["vr"], badge: "VR",
    name: "Riyadh Smart City", award: "Digital Twin",
    tagline: "A data-driven VR journey through Riyadh's transformation",
    desc: "An immersive VR digital twin that compares Riyadh's past challenges, such as chronic traffic and high pollution, with today's sustainable city under Vision 2030: the Riyadh Metro, Green Riyadh and the rise in green cover.",
    highlights: ["Data-driven before/after comparison of the city", "Mega-projects such as the Riyadh Metro and Green Riyadh", "Published on the Meta Horizon Store"],
    spec: {"Engine": "Unity · C#", "Platform": "Meta Quest", "Role": "Unity XR Developer", "Studio": "RMG", "Year": "2024–2026"},
    links: [["Meta Horizon Store", "https://www.meta.com/en-gb/experiences/riyadh-smart-city/25709698955285363/"]], preview: "resources/previews/riyadh-smart-city.mp4"
  },
  {
    id: "portalverse", cover: "resources/games/portalverse-cover.webp", logo: "resources/games/portalverse-logo.webp", shots: ["resources/shots/portalverse-1.webp", "resources/shots/portalverse-2.webp", "resources/shots/portalverse-3.webp"], yt: "4iOY34R8aLU", cats: ["vr"], badge: "VR",
    name: "PortalVerse XR", award: "AI voice",
    tagline: "Interactive portals into 360\u00b0 factory tours",
    desc: "Immersive 360\u00b0 experiences reached through interactive portals, with an optional AI voice assistant to guide exploration. Used for smart-manufacturing factory tours on Meta Quest.",
    highlights: ["Portal hub that opens into 360° factory tours", "Optional AI voice assistant", "Published on the Meta Horizon Store"],
    spec: {"Engine": "Unity · C#", "Platform": "Meta Quest", "Role": "Unity XR Developer", "Studio": "RMG", "Year": "2024–2026"},
    links: [["Meta Horizon Store", "https://www.meta.com/en-gb/experiences/portalverse-xr/26848892038103128/"]], preview: "resources/previews/portalverse.mp4"
  },
  {
    id: "mymall", cover: "resources/games/mymall-cover.webp", logo: "resources/games/mymall-logo.webp", shots: ["resources/shots/mymall-1.webp", "resources/shots/mymall-2.webp", "resources/shots/mymall-3.webp"], yt: "SxNYyPtDJp4", cats: ["mobile"], badge: "Mobile",
    name: "MyMall", award: "Multiplayer",
    tagline: "A metaverse-style 3D social shopping mall",
    desc: "A 3D social e-commerce app: a virtual mall where real contracted stores display real products and players buy directly in the app. Photon multiplayer with voice and text chat lets friends meet in a lobby and shop together.",
    highlights: ["Virtual mall with 300+ real stores", "Avatars and character customisation", "Photon PUN multiplayer with voice and text chat"],
    spec: {"Engine": "Unity · C#", "Platform": "Android · iOS", "Role": "Unity 3D Developer", "Studio": "bluezone web", "Year": "2021–2024"},
    links: [["Android", "https://apkpure.com/my-mall/com.bluezone.mymall/"], ["iOS", "https://apps.apple.com/hr/app/mymall"]], preview: "resources/previews/mymall.mp4"
  }
];
