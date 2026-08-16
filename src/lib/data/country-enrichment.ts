export interface CountryEnrichment {
  id: string;
  regionalTitle: string;
  regionalOverview: string;
  contentHighlights: {
    title: string;
    description: string;
    items: string[];
  };
  setupOptimization: {
    title: string;
    description: string;
    tips: string[];
  };
  specificFaqs: {
    question: string;
    answer: string;
  }[];
}

export const tier1CountryEnrichments: Record<string, CountryEnrichment> = {
  'united-states': {
    id: 'united-states',
    regionalTitle: 'Streaming Landscape & Viewing Preferences in the United States',
    regionalOverview: 'In the United States, IPTV streaming has become a primary entertainment choice for cord-cutters seeking high-definition live sports, national broadcast coverage, and extensive on-demand movies without traditional long-term cable contracts.',
    contentHighlights: {
      title: 'Popular Viewing & Sports Categories in the US',
      description: 'American audiences typically prioritize high-bandwidth coverage across major professional and collegiate competitions:',
      items: [
        'Major Professional Leagues: Pro football, basketball, baseball, ice hockey, and soccer broadcasts.',
        'Collegiate Athletics: College football and basketball tournament coverage with live score tracking.',
        'National & Global News: Continuous 24/7 news broadcasts and financial market analysis.',
        'Blockbuster VOD: Thousands of on-demand 4K movies and complete television series box sets.'
      ]
    },
    setupOptimization: {
      title: 'US Network & Hardware Optimization',
      description: 'To achieve smooth 4K UHD playback across American broadband networks, follow these technical recommendations:',
      tips: [
        'Broadband Speeds: Minimum 25 Mbps for 1080p HD; 50+ Mbps recommended for 4K HDR streams and multi-device homes.',
        'Streaming Hardware: Amazon Fire TV Stick 4K Max, Apple TV 4K, Google TV with Chromecast, and Nvidia Shield Pro.',
        'Network Connection: Connect via 5 GHz Wi-Fi or wired Ethernet to minimize packet loss during high-traffic evening hours.',
        'Player Configuration: Use TiviMate or IPTV Smarters Pro with hardware video decoding enabled.'
      ]
    },
    specificFaqs: [
      {
        question: 'Can I use my IPTV subscription across different US states while traveling?',
        answer: 'Yes. Your subscription credentials are tied to your account rather than a physical address, allowing you to stream seamlessly across all 50 US states on mobile devices, laptops, or portable streaming sticks.'
      },
      {
        question: 'What internet speed is recommended for IPTV streaming in the United States?',
        answer: 'We recommend a minimum download speed of 25 Mbps for standard 1080p Full HD streams and 50+ Mbps for uncompressed 4K UHD streaming and multi-device households.'
      },
      {
        question: 'Is a VPN recommended for IPTV streaming in the USA?',
        answer: 'While not mandatory, using a secure VPN in the US can help prevent ISP bandwidth throttling during peak evening hours and major live sporting events.'
      }
    ]
  },

  'united-kingdom': {
    id: 'united-kingdom',
    regionalTitle: 'Streaming Landscape & Viewing Preferences in the United Kingdom',
    regionalOverview: 'Viewers in the United Kingdom prioritize ultra-stable live sports broadcasting, European football coverage, domestic entertainment, and comprehensive Electronic Program Guide (EPG) schedules.',
    contentHighlights: {
      title: 'Popular UK Sports & Entertainment Categories',
      description: 'UK streaming viewers frequently look for comprehensive coverage across domestic and international events:',
      items: [
        'Domestic & European Football: Full coverage of English league fixtures, European cup competitions, and international tournaments.',
        'Motorsport & Racing: Live Formula 1 Grand Prix weekends, MotoGP, and British motorsport championships.',
        'Cricket & Rugby: International test matches, T20 leagues, Six Nations rugby, and domestic club competitions.',
        'British & Global Entertainment: High-definition documentary channels, drama series, and cinema premieres.'
      ]
    },
    setupOptimization: {
      title: 'UK Broadband & Streaming Setup',
      description: 'Maximize your streaming performance on UK fibre optic and broadband networks with these practical tips:',
      tips: [
        'ISP Compatibility: Compatible with major UK fibre providers. A VPN can be enabled if your ISP applies peak-hour throttling.',
        'Preferred Hardware: Amazon Fire TV Stick 4K, Apple TV 4K, Samsung Smart TV (Tizen), and LG Smart TV (webOS).',
        'EPG Configuration: Ensure XMLTV EPG synchronization is enabled in your player app for real-time schedule tracking.',
        'Buffer Size: Set buffer caching to 5–10 seconds in player settings to maintain continuous playback during live broadcasts.'
      ]
    },
    specificFaqs: [
      {
        question: 'How does IPTV perform with UK broadband and fibre providers?',
        answer: 'Our IPTV service is optimized for UK broadband networks. If your local ISP applies bandwidth management during peak sporting events, connecting through a standard VPN ensures uninterrupted streaming.'
      },
      {
        question: 'Can I access full EPG guide schedules in the UK?',
        answer: 'Yes. Our service provides complete Electronic Program Guide (EPG) data feeds on compatible player applications so you can check program times and schedules easily.'
      },
      {
        question: 'Which devices are most popular for IPTV in the UK?',
        answer: 'The Amazon Fire TV Stick 4K, Samsung Smart TVs, LG Smart TVs, Apple TV 4K, and Android TV boxes are the most widely used devices among UK subscribers.'
      }
    ]
  },

  'canada': {
    id: 'canada',
    regionalTitle: 'Streaming Landscape & Viewing Preferences in Canada',
    regionalOverview: 'Canadian streaming audiences require reliable multi-language programming, North American and international sports coverage, and smooth performance across diverse broadband infrastructures from urban centers to regional provinces.',
    contentHighlights: {
      title: 'Popular Viewing & Sports Categories in Canada',
      description: 'Canadian viewers enjoy a balanced mix of North American athletics and global entertainment:',
      items: [
        'Winter Sports & Hockey: Complete professional ice hockey coverage, international tournaments, and winter athletic championships.',
        'North American Leagues: Basketball, American and Canadian football, and major baseball broadcasts.',
        'Bilingual Programming: Extensive selection of English and French language channels and regional broadcasts.',
        'Global Cinema & VOD: Extensive on-demand catalog featuring new release movies and multi-season TV series.'
      ]
    },
    setupOptimization: {
      title: 'Canadian Network & Hardware Optimization',
      description: 'Recommendations for smooth streaming across Canadian high-speed fiber and cable internet connections:',
      tips: [
        'Bandwidth Requirements: 25 Mbps for Full HD; 50+ Mbps for 4K streaming across Canadian fiber optic connections.',
        'Compatible Hardware: Apple TV 4K, Amazon Fire TV Stick 4K Max, Android TV devices, and Smart TVs.',
        'Player Recommendations: TiviMate and IPTV Smarters Pro provide top-tier playlist management and EPG integration.',
        'Connection Quality: Use a 5 GHz Wi-Fi band or direct Ethernet to eliminate latency and micro-buffering.'
      ]
    },
    specificFaqs: [
      {
        question: 'Is IPTV accessible across all Canadian provinces and territories?',
        answer: 'Yes, our service operates across all Canadian provinces and territories, delivering consistent HD and 4K streams on any high-speed Canadian internet connection.'
      },
      {
        question: 'Does the service offer English and French programming in Canada?',
        answer: 'Yes, the channel lineup includes extensive English and French language programming, regional broadcasts, and international channels.'
      },
      {
        question: 'What is the best way to avoid buffering on Canadian ISPs?',
        answer: 'Connecting your streaming device via Ethernet cable or 5GHz Wi-Fi and utilizing our load-balanced anti-freeze server infrastructure ensures reliable playback.'
      }
    ]
  },

  'australia': {
    id: 'australia',
    regionalTitle: 'Streaming Landscape & Viewing Preferences in Australia',
    regionalOverview: 'In Australia, viewers demand robust live sports streaming covering domestic football codes, cricket, rugby, motorsport, and global entertainment, optimized for National Broadband Network (NBN) routing.',
    contentHighlights: {
      title: 'Popular Australian Sports & Viewing Categories',
      description: 'Australian audiences expect reliable high-frame-rate coverage across key domestic and global competitions:',
      items: [
        'Australian Football & Rugby: Comprehensive coverage of Australian rules football, rugby league, and rugby union matches.',
        'Cricket & Tennis: Domestic T20 leagues, international test series, grand slam tennis, and summer sporting events.',
        'Motorsport: Supercars championships, Formula 1 Grand Prix races, and international racing series.',
        'International Entertainment: Complete 24/7 global news networks, lifestyle programming, and 4K cinema VOD.'
      ]
    },
    setupOptimization: {
      title: 'NBN Connection & Hardware Optimization',
      description: 'Optimize your IPTV streaming experience across Australian NBN broadband tiers:',
      tips: [
        'NBN Speed Tiers: NBN 50 or NBN 100 plans provide optimal bandwidth for buffer-free 4K UHD sports streaming.',
        'Hardware Choices: Google TV, Amazon Fire TV Stick 4K, Apple TV 4K, and Samsung/LG Smart TVs.',
        'Decoder Settings: Enable Hardware (HW/HW+) video decoding in your IPTV player app for smooth 50/60fps playback.',
        'Timezone Handling: Our 24/7 streaming servers ensure live international events are always accessible in Australian timezones.'
      ]
    },
    specificFaqs: [
      {
        question: 'How does the service perform on the Australian NBN?',
        answer: 'Our servers are optimized for Australian NBN routing, providing fast channel switching and buffer-free HD/4K playback on NBN 25, 50, 100, and faster tiers.'
      },
      {
        question: 'Can I watch international live sports in Australian time zones?',
        answer: 'Yes. With 24,000+ live channels and 24/7 server availability, you can stream live international sports and events regardless of local time zone differences.'
      },
      {
        question: 'Which IPTV player apps work best on Australian Smart TVs?',
        answer: 'IPTV Smarters Pro, Smartone IPTV, and IBO Player are popular on Samsung and LG Smart TVs in Australia, while TiviMate is ideal for Android TV and Firestick.'
      }
    ]
  },

  'germany': {
    id: 'germany',
    regionalTitle: 'Streaming-Landschaft & Sehgewohnheiten in Deutschland',
    regionalOverview: 'Der IPTV-Markt in Deutschland erfordert herausragende Bildqualität, stabiles Live-Sport-Streaming sowie ein umfassendes Angebot an deutschsprachigen und internationalen Sendern in nativer HD- und 4K-Auflösung.',
    contentHighlights: {
      title: 'Beliebte Sport- und Unterhaltungskategorien in Deutschland',
      description: 'Deutsche Zuschauer legen großen Wert auf hochauflösende Live-Übertragungen und vielseitige Unterhaltung:',
      items: [
        'Fußball & Europapokal: Nationale Ligenspiele, europäische Clubwettbewerbe und internationale Turniere in 60fps.',
        'Motorsport & Wintersport: Formel 1, DTM, alpine Ski-Wettbewerbe und Biathlon-Weltcups.',
        'Deutschsprachige Unterhaltung: Dokumentationskanäle, Nachrichten, Kultur- und Regionalsender.',
        'Umfangreiche VOD-Mediathek: Tausende Filme und Serien mit deutscher Tonspur und Originalton.'
      ]
    },
    setupOptimization: {
      title: 'Netzwerk- und Hardware-Optimierung für Deutschland',
      description: 'Empfehlungen für optimale Streaming-Leistung an deutschen VDSL- und Glasfaseranschlüssen:',
      tips: [
        'Internetanbindung: Mindestens 25 MBit/s für Full HD; 50+ MBit/s für native 4K UHD-Inhalte.',
        'Hardware: Amazon Fire TV Stick 4K Max, Apple TV 4K, Android TV (z. B. Nvidia Shield) und Smart TVs.',
        'Player-Software: TiviMate und IPTV Smarters Pro bieten die beste deutsche EPG-Übersicht und schnelle Umschaltzeiten.',
        'WLAN-Tipp: 5-GHz-WLAN oder LAN-Kabelverbindung nutzen, um Paketverluste bei Live-Übertragungen zu vermeiden.'
      ]
    },
    specificFaqs: [
      {
        question: 'Funktioniert der IPTV-Dienst mit deutschen Internetanbietern reibungslos?',
        answer: 'Ja, der Dienst ist für alle gängigen deutschen Internetanbieter (Telekom, Vodafone, 1&1, O2 etc.) optimiert. Bei Spitzenereignissen sorgt unsere Anti-Freeze-Technologie für stabile Verbindungen.'
      },
      {
        question: 'Gibt es deutsche Tonspuren für VOD-Filme und Serien?',
        answer: 'Ja, ein großer Teil unserer 80.000+ VOD-Filme und Serien ist mit deutscher Sprachfassung und optionalen Untertiteln verfügbar.'
      },
      {
        question: 'Welche Hardware wird für IPTV in Deutschland empfohlen?',
        answer: 'Amazon Fire TV Stick 4K, Android TV/Google TV (z. B. Nvidia Shield, Chromecast) sowie neuere Samsung- und LG-Smart-TVs bieten die beste Leistung.'
      }
    ]
  },

  'france': {
    id: 'france',
    regionalTitle: 'Paysage du Streaming & Préférences Audiovisuelles en France',
    regionalOverview: 'En France, les utilisateurs d\'IPTV recherchent une diffusion fluide des compétitions sportives, une large sélection de chaînes françaises et internationales ainsi qu\'un catalogue VOD riche en langue française.',
    contentHighlights: {
      title: 'Catégories Sportives et Divertissement en France',
      description: 'Les téléspectateurs français privilégient les retransmissions en haute définition et le cinéma récent :',
      items: [
        'Football Français et Européen : Championnats nationaux, compétitions européennes et rencontres internationales.',
        'Rugby et Cyclisme : Matchs du Top 14, Tournoi des Six Nations et grands tours cyclistes en direct.',
        'Sports Mécaniques : Grands Prix de Formule 1 et MotoGP en qualité HD et 4K.',
        'Cinéma et Séries VOD : Vaste sélection de films et séries en version française (VF) et VOSTFR.'
      ]
    },
    setupOptimization: {
      title: 'Optimisation Réseau et Équipement pour la France',
      description: 'Conseils pour une expérience de streaming optimale sur les réseaux fibre optique et ADSL français :',
      tips: [
        'Débit Internet Recommandé : Minimum 25 Mbps pour le 1080p Full HD ; 50+ Mbps pour la 4K UHD sur fibre optique.',
        'Appareils Compatibles : Amazon Fire TV Stick 4K, Apple TV 4K, Smart TV Samsung (Tizen) et LG (webOS).',
        'Applications Conseillées : IPTV Smarters Pro, TiviMate ou IBO Player pour une interface fluide avec guide EPG.',
        'Connexion Stable : Privilégier un câble Ethernet ou le Wi-Fi 5 GHz pour éliminer les micro-coupures.'
      ]
    },
    specificFaqs: [
      {
        question: 'Le service IPTV est-il compatible avec les box internet françaises ?',
        answer: 'Oui, le service fonctionne parfaitement sur toutes les connexions internet en France (fibre optique, ADSL, 4G/5G) avec les principaux fournisseurs d\'accès.'
      },
      {
        question: 'Les films et séries VOD sont-ils disponibles en version française ?',
        answer: 'Oui, notre catalogue de plus de 80 000 titres propose de nombreux contenus en version française (VF) ainsi qu\'en version originale sous-titrée (VOSTFR).'
      },
      {
        question: 'Quel est le délai d\'activation après commande en France ?',
        answer: 'L\'activation est instantanée. Dès validation de votre commande via notre support WhatsApp, vos identifiants Xtream Codes ou M3U vous sont transmis immédiatement.'
      }
    ]
  },

  'saudi-arabia': {
    id: 'saudi-arabia',
    regionalTitle: 'تجربة البث والمشاهدة التلفزيونية في المملكة العربية السعودية',
    regionalOverview: 'في المملكة العربية السعودية، توفر شبكات الألياف البصرية وشبكات الجيل الخامس 5G بيئة مثالية لخدمات IPTV لمتابعة كبرى البطولات الرياضية والبرامج الترفيهية العربية والعالمية بجودة 4K فائقة الوضوح.',
    contentHighlights: {
      title: 'أبرز المحتويات والبطولات الرياضية في السعودية',
      description: 'يحرص المشاهدون في المملكة على متابعة كبرى المنافسات الرياضية والإنتاجات السينمائية:',
      items: [
        'منافسات كرة القدم: مباريات دوري روشن السعودي، دوري أبطال آسيا، والدوريات الأوروبية الكبرى.',
        'سباقات السيارات العالمية: سباقات فورمولا 1 في السعودية والشرق الأوسط وسباقات الراليات.',
        'الإنتاج الدرامي العربي: أحدث المسلسلات الخليجية والمصرية والعربية الحصرية.',
        'مكتبة VOD ضخمة: آلاف الأفلام العالمية والعربية بجودة 4K مع الترجمة والدبلجة.'
      ]
    },
    setupOptimization: {
      title: 'إعدادات وتشغيل الخدمة في المملكة العربية السعودية',
      description: 'إرشادات لتحقيق أفضل أداء عبر شبكات الألياف والجيل الخامس في مدن المملكة:',
      tips: [
        'سرعات الاتصال: 25 ميغابت/ثانية للبث عالي الدقة HD و50+ ميغابت/ثانية لبث 4K فائق الوضوح.',
        'الأجهزة الموصى بها: شاشات التلفزيون الذكية (Samsung/LG)، أجهزة Apple TV 4K، وAmazon Fire TV Stick.',
        'تطبيقات التشغيل: تطبيق TiviMate وتطبيق IPTV Smarters Pro وتطبيق IBO Player لتنظيم القنوات ودليل EPG.',
        'استقرار البث: استخدام خوادم مجهزة بتقنية Anti-Freeze مانعة للتقطيع لضمان مشاهدة متواصلة أثناء المباريات الحية.'
      ]
    },
    specificFaqs: [
      {
        question: 'هل خدمة IPTV تعمل بكفاءة في جميع مدن المملكة العربية السعودية؟',
        answer: 'نعم، الخدمة متوافقة وتعمل بأعلى جودة (FHD و 4K) في جميع مدن ومناطق المملكة العربية السعودية عبر شبكات الألياف البصرية وشبكات الجيل الخامس 5G.'
      },
      {
        question: 'هل تتوفر قنوات وبطولات دوري روشن السعودي والرياضات العالمية؟',
        answer: 'نعم، تتيح الخدمة متابعة كبرى الدوريات الرياضية المحلية والدولية مع جودة بث فائقة وتقنية مانعة للتقطيع Anti-Freeze.'
      },
      {
        question: 'كيف يتم استلام وتفعيل الاشتراك في السعودية؟',
        answer: 'يتم التفعيل فورياً وبشكل مباشر بعد التواصل مع فريق الدعم عبر الواتساب لتزويدك ببيانات الدخول ورابط الاشتراك.'
      }
    ]
  },

  'united-arab-emirates': {
    id: 'united-arab-emirates',
    regionalTitle: 'Streaming Landscape & Viewing Preferences in the UAE',
    regionalOverview: 'In the United Arab Emirates, expatriate and local audiences demand a cosmopolitan IPTV catalog featuring premier international sports, Arabic entertainment, South Asian programming, European leagues, and 4K cinema over high-speed UAE fiber networks.',
    contentHighlights: {
      title: 'Multilingual & International Content in the UAE',
      description: 'UAE subscribers enjoy an expansive range of multicultural channels and global sports broadcasts:',
      items: [
        'Global Football & Sports: Full coverage of European football leagues, Champions League, and international tournaments.',
        'Cricket & South Asian Content: Live cricket tournaments (IPL, ICC World Cups), Indian cinema, and regional channels.',
        'Arabic Entertainment: Premium Gulf and Middle Eastern drama series, talk shows, and regional news.',
        'Global Cinema VOD: Thousands of on-demand blockbuster movie titles with multilingual subtitle support.'
      ]
    },
    setupOptimization: {
      title: 'UAE Fiber Connection & Hardware Optimization',
      description: 'Technical recommendations for buffer-free streaming on UAE high-speed fiber infrastructure:',
      tips: [
        'Fiber Performance: Ultra-fast fiber networks in Dubai, Abu Dhabi, and across the Emirates deliver low latency for 4K streaming.',
        'Recommended Hardware: Apple TV 4K, Amazon Fire TV Stick 4K Max, Samsung Smart TVs, and LG Smart TVs.',
        'Player Choice: IPTV Smarters Pro and TiviMate offer straightforward Xtream Codes API login and fast channel switching.',
        'Network Stability: Use Ethernet or 5GHz Wi-Fi to maintain stable connection bitrates during live broadcasts.'
      ]
    },
    specificFaqs: [
      {
        question: 'Can I watch multi-language international channels in the UAE?',
        answer: 'Yes. Our service includes over 24,000 live channels catering to diverse communities in the UAE, including Arabic, English, Hindi, Urdu, Tagalog, French, and European broadcasts.'
      },
      {
        question: 'What devices are recommended for streaming in Dubai and Abu Dhabi?',
        answer: 'Apple TV 4K, Amazon Fire TV Stick 4K Max, and Samsung/LG Smart TVs provide optimal decoding for 4K live sports and VOD in the UAE.'
      },
      {
        question: 'How fast is customer support for UAE subscribers?',
        answer: 'Our dedicated support team is accessible 24/7 via WhatsApp to assist with instant activation and player setup in your local time zone.'
      }
    ]
  },

  'spain': {
    id: 'spain',
    regionalTitle: 'Panorama del Streaming y Preferencias Audiovisuales en España',
    regionalOverview: 'En España, los usuarios buscan una experiencia IPTV de máxima estabilidad para disfrutar del fútbol nacional y europeo, baloncesto, deportes de motor y las mejores series y películas con doblaje en castellano y versión original.',
    contentHighlights: {
      title: 'Categorías de Deportes y Entretenimiento en España',
      description: 'Los espectadores en España valoran especialmente las retransmisiones en directo con alta tasa de fotogramas (60fps):',
      items: [
        'Fútbol Nacional y Europeo: Cobertura de la liga española, competiciones europeas y torneos internacionales.',
        'Deportes de Motor: Grandes Premios de Fórmula 1 y carreras de MotoGP en directo y en alta definición.',
        'Baloncesto y Tenis: Partidos de liga nacional, competiciones europeas de baloncesto y grandes torneos de tenis.',
        'Cine y Series VOD: Amplio catálogo de películas y series con audio en castellano y versión original con subtítulos.'
      ]
    },
    setupOptimization: {
      title: 'Optimización de Red y Dispositivos para España',
      description: 'Consejos para maximizar el rendimiento sobre las redes de fibra óptica en España:',
      tips: [
        'Velocidad de Fibra: 25 Mbps para 1080p Full HD; 50+ Mbps recomendados para streaming en 4K UHD sin cortes.',
        'Dispositivos Idóneos: Smart TVs (Samsung Tizen, LG webOS), Amazon Fire TV Stick 4K y dispositivos Android TV / Google TV.',
        'Reproductores Recomendados: IPTV Smarters Pro, Smartone IPTV, IBO Player y TiviMate para una guía EPG ágil.',
        'Estabilidad: Conexión mediante cable de red LAN o Wi-Fi 5 GHz para evitar fluctuaciones de señal en partidos en directo.'
      ]
    },
    specificFaqs: [
      {
        question: '¿El servicio es compatible con los operadores de fibra en España?',
        answer: 'Sí, nuestro servicio está optimizado para funcionar con todas las conexiones de fibra óptica y redes móviles de España (Movistar, Vodafone, Orange, MásMóvil, Digi, etc.).'
      },
      {
        question: '¿Se incluyen contenidos VOD con audio en español de España (castellano)?',
        answer: 'Sí, nuestro catálogo VOD de más de 80.000 títulos cuenta con una amplia selección de películas y series con audio en castellano y opciones de subtítulos.'
      },
      {
        question: '¿Cómo se configura el servicio en una Smart TV en España?',
        answer: 'Puedes descargar aplicaciones como IPTV Smarters Pro, IBO Player o Smartone IPTV directamente desde la tienda de aplicaciones de tu Smart TV Samsung o LG e iniciar sesión con tus credenciales.'
      }
    ]
  },

  'italy': {
    id: 'italy',
    regionalTitle: 'Panorama dello Streaming & Preferenze Televisive in Italia',
    regionalOverview: 'In Italia, gli appassionati di streaming scelgono l\'IPTV per seguire il campionato di calcio, le coppe europee, i motori (Formula 1, MotoGP), il grande tennis e un catalogo completo di canali d\'intrattenimento, documentari e cinema in lingua italiana e qualità 4K UHD.',
    contentHighlights: {
      title: 'Categorie Sportive e Intrattenimento in Italia',
      description: 'I telespettatori italiani richiedono massima fluidità a 60fps per gli eventi sportivi in diretta:',
      items: [
        'Calcio Italiano ed Europeo: Campionato di massima serie, coppe continentali e tornei internazionali.',
        'Motori in Diretta: Gran Premi di Formula 1, MotoGP, Superbike e campionati motoristici mondiali.',
        'Tennis e Basket: Grandi tornei del circuito ATP/WTA, coppe europee di basket e sport internazionali.',
        'Cinema e Serie TV VOD: Migliaia di film e serie con doppiaggio in italiano e lingua originale con sottotitoli.'
      ]
    },
    setupOptimization: {
      title: 'Ottimizzazione di Rete e Dispositivi per l\'Italia',
      description: 'Consigli per una riproduzione senza interruzioni sulle reti in fibra ottica italiane:',
      tips: [
        'Velocità di Rete: Almeno 25 Mbps per lo streaming Full HD; 50+ Mbps per contenuti 4K Ultra HD su fibra FTTH/FTTC.',
        'Dispositivi Consigliati: Amazon Fire TV Stick 4K, Apple TV 4K, Smart TV Samsung (Tizen) e LG (webOS).',
        'App Consigliate: TiviMate per Fire TV/Android TV; IPTV Smarters Pro o IBO Player per Smart TV.',
        'Stabilità del Segnale: Collegamento via cavo Ethernet o Wi-Fi a 5 GHz per prevenire lag durante le partite di cartello.'
      ]
    },
    specificFaqs: [
      {
        question: 'Il servizio IPTV funziona con tutti i provider internet italiani?',
        answer: 'Sì, il servizio è pienamente compatibile con tutti gli operatori di rete fissa e mobile in Italia (TIM, Vodafone, Fastweb, WindTre, Iliad, ecc.).'
      },
      {
        question: 'I film e le serie TV su richiesta sono disponibili in italiano?',
        answer: 'Sì, gran parte degli oltre 80.000 titoli on-demand include audio in italiano e tracce audio originali con sottotitoli.'
      },
      {
        question: 'Qual è la migliore app IPTV per Smart TV e Fire Stick in Italia?',
        answer: 'TiviMate è la scelta ideale per dispositivi Android TV e Firestick, mentre IPTV Smarters Pro e IBO Player sono molto apprezzate sulle Smart TV Samsung e LG.'
      }
    ]
  }
};

export function getCountryEnrichment(countryId: string): CountryEnrichment | undefined {
  return tier1CountryEnrichments[countryId];
}
