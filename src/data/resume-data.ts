import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ian Hobbs",
  initials: "IH",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/Sydney",
  about: "Media Artist, Photographer, Creative Technologist",
  summary: [
    'Interested in experimental forms of photography using a post-photography approach to themes of observation and technological vistas. Ian Hobbs is a highly respected Artist and media maker. He works in photography, motion graphics and websites. He transforms conceptual thought and abstract ideas into clear, elegant media outcomes. He has developed and taught undergraduate courses in New Media, Design and Photography. Institutions include; Sydney University, University of Western Sydney and Uni of Newcastle. He is currently working as Ian Hobbs Media. "A creative consultancy for media production. My happy place is between images and code. My work often sits between spaces. Between design and art. Between you and me. Communicating an idea fit for a purpose".',
    "'My process might begin with meeting a need to visualise or communicate and idea, a thing, a space. It can be a kind of struggle to negotiating with the terrain you find yourself in. The resulting output can be a kind of romance of the highest vision of the idea. The best work changes me.'",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
  personalWebsiteUrl: "https://ianhobbs.net",
  contact: {
    email: "ian@ianhobbs.net",
    tel: "+61411032601",
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/ianhobbs_media/",
        icon: "instagram",
      },
    ],
  },
  education: [
    {
      school: "University of Sydney, Sydney College of Art",
      degree: "BA(Hons) Major in Photomedia / Electronic Media",
      start: "1998",
      end: "1999",
    },
    {
      school: "University of NSW",
      degree: "Bachelor's Degree in Fine Art, Major in Photomedia",
      start: "1980",
      end: "1985",
    },
  ],
  awards: [
    {
      award:
        "Recipient of Premiers Department Grant with Penrith Regional Gallery",
      year: "2003",
    },
    {
      award:
        "Recipient of New Media Grant for Interactive Works, Australia Council.",
      year: "1999",
    },
    {
      award:
        "The Art Directors Club, New York, NY 75th Awards, 'Merit Award for Editorial Publications' for Object Magazine, Craft Council of NSW.",
      year: "1996",
    },
    {
      award:
        "National Gallery of Australia Collection. 'Sea Shell Headset' Joyce Hinterding & Ian Hobbs",
      year: "1988",
    },
    {
      award:
        "National Gallery of Australia Collection. Poster, 'May 1st Club - Smash Capital'.",
      year: "1983",
    },
  ],
  projects: [
    {
      title: "Sea Kin",
      techStack: ["Photography", "Collaboration"],
      description: "A collaboration with Jennifer Turpin and Sophie Callet.",
      link: {
        label: "Australian National Maratime Museum",
        href: "https://www.sea.museum/en/whats-on/exhibitions/sea-kin",
      },
    },
    {
      title: "Clean it Up",
      techStack: ["Residency", "Video", "Research"],
      description: "A residency with Robyn Backen working with the Bundanon Trust to research the Clean-it-UP concepts with Daniel Peltz and Sissi Westerberg , Sweden.",
      link: {
        label: "Clean it UP",
        href: "https://ianhobbs.net/works/fireweed",
      },
    },
    {
      title: "A Thousand Words",
      techStack: ["Video", "Website", "Exhibition", "Commission"],
      description:
        "Comissioned by the Museum of Sydney, 'A Thousand Words' is a video work that explores the relationship between language and image. The work was exhibited at the Museum of Sydney in 2020.",
      link: {
        label: "A Thousand Words",
        href: "https://atwonline.com.au/",
      },
    },
  ],
  exhibitions: [
    {
      title: "Consequences",
      venue: "Grace Cossington Smith Gallery",
      year: "2022",
    },
    { title: "Nano Black", venue: "Browser Plugin / GitHub", year: "2022" },
    { title: "A Thousand Words", venue: "Sydney Museum", year: "2020" },
    { title: "Voices Within", venue: "Green Square, NSW", year: "2019" },
    { title: "Operation Crayweed", venue: "StudioTCS", year: "2017" },
    { title: "Waterfall", venue: "StudioTCS", year: "2018" },
    { title: "Human", venue: "UNSW Architecture", year: "2018" },
    { title: "Swing", venue: "StudioTCS", year: "2018" },
    { title: "Thought Train", venue: "Wynscreen, Sydney", year: "2018" },
    {
      title: "Chester Nealie Etched in Fire",
      venue: "Ron Sang Publications, NZ",
      year: "2016",
    },
    { title: "Making Halo", venue: "Frasers Setsui / Partridge", year: "2012" },
    { title: "Last Word", venue: "Bundanon Trust, Nowra NSW", year: "2012" },
    {
      title: "Honouring Names Tent Embassy",
      venue: "Sydney Opera House",
      year: "2012",
    },
    { title: "ACPET 25 Years", venue: "Documentary", year: "2012" },
    { title: "Days", venue: "Lismore Regional Gallery, NSW", year: "2011" },
    { title: "Last Word", venue: "Bundanon Trust, Nowra NSW", year: "2011" },
    {
      title: "Liz Williamson: Textiles",
      venue: "Craft Council NSW",
      year: "2009",
    },
    {
      title: "Matthew and Others",
      venue: "Campbelltown Art Centre",
      year: "2006",
    },
    { title: "Ali or 3li", venue: "Casula Powerhouse", year: "2005" },
    {
      title: "Welcome to my Loungeroom",
      venue: "Penrith and Lewers Bequest Regional Gallery",
      year: "2004",
    },
    { title: "Art First", venue: "Qdeck, Mt Penang NSW", year: "2004" },
    {
      title: "Selenium Revisited",
      venue: "Marrickville Art Space",
      year: "2002",
    },
    { title: "Degree Show", venue: "Sydney College of the Arts", year: "1999" },
    { title: "Morse Code", venue: "Art Space Wooloomooloo", year: "1998" },
    { title: "Latitudes", venue: "ANU Canberra School of Art", year: "1998" },
    { title: "Circus Circus", venue: "Hellfire Club, Sydney", year: "1997" },
    {
      title: "Luminous Insects",
      venue: "Fringe Festival, Sydney",
      year: "1997",
    },
    {
      title: "Banalities",
      venue: "Performance Space / Side on Gallery",
      year: "1997",
    },
    {
      title: "Treasures of the Art Trail",
      venue: "Regional Galleries of NSW",
      year: "1994-1996",
    },
    {
      title: "Shh/Ratios of Luminance",
      venue: "Perspecta, Performance Space, Sydney",
      year: "1988",
    },
    { title: "Twelve", venue: "First Draft Gallery, Sydney", year: "1987" },
  ],
} as const;
