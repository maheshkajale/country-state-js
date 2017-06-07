






//country array full name
var country_arr = new Array("United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Aland Islands", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia, Plurinational State of", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Cote d'Ivoire", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of the", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela, Bolivarian Republic of", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");

// country array abbreviations
var country_abbr_arr = new Array("US", "CA", "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "AX", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CI", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW");


var s_a = new Array();
var s_abbr = new Array();
s_a[0] = "";
        
//Afghanistan
        s_a["AF"] = "Badakhshun|Baghlun|Balkh|Budghus|Bumuun|Duykondu|Faruh|Furyub|Ghaznu|Ghowr|Helmand|Herut|Jowzjun|Kandahur|Khowst|Konar [Kunar]|Kondoz [Kunduz]|Kubul [Kubol]|Kupusu|Laghmun|Lowgar|Nangrahur [Nangarhur]|Nurestun|Numruz|Oruzgun [Uruzgun]|Paktuku|Paktuu|Panjshur|Parwun|Samangun|Sar-e Pol|Takhur|Wardak [Wardag]|Zubol [Zubul]";
        s_abbr["AF"] = "BDS|BGL|BAL|BDG|BAM|DAY|FRA|FYB|GHA|GHO|HEL|HER|JOW|KAN|KHO|KNR|KDZ|KAB|KAP|LAG|LOW|NAN|NUR|NIM|ORU|PKA|PIA|PAN|PAR|SAM|SAR|TAK|WAR|ZAB";
//Albania
        s_a["AL"] = "Berat|Diber|Durres|Elbasan|Fier|Gjirokaster|Korae|Kukes|Lezhe|Shkoder|Tirane|Vlore";
        s_abbr["AL"] = "BE|DI|DU|EL|FI|GJ|KO|KU|LE|SH|TI|VL";
//Algeria
        s_a["DZ"] = "Ain Defla|Ain Tcmouchent|Adrar|Alger|Annaba|Batna|Bcchar|Bcjaia|Biskra|Blida|Bordj Bou Arrcridj|Bouira|Boumerdes|Chlef|Constantine|Djelfa|El Bayadh|El Oued|El Tarf|Ghardaia|Guelma|Illizi|Jijel|Khenchela|Laghouat|Mascara|Mcdca|Mila|Mostaganem|Msila|Naama|Oran|Ouargla|Oum el Bouaghi|Relizane|Saida|Sctif|Sidi Bel Abbes|Skikda|Souk Ahras|Tamanghasset|Tcbessa|Tiaret|Tindouf|Tipaza|Tissemsilt|Tizi Ouzou|Tlemcen";
        s_abbr["DZ"] = "AI|AI|AD|AL|AN|BA|BC|BC|BI|BL|BO|BO|BO|CH|CO|DJ|EL|EL|EL|GH|GU|IL|JI|KH|LA|MA|MC|MI|MO|MS|NA|OR|OU|OU|RE|SA|SC|SI|SK|SO|TA|TC|TI|TI|TI|TI|TI|TL";
//American Samoa
        s_a["AS"] = "";
        s_abbr["AS"] = "";
//Andorra
        s_a["AD"] = "Andorra la Vella|Canillo|Encamp|Escaldes-Engordany|La Massana|Ordino|Sant Julis de Liria";
        s_abbr["AD"] = "AN|CA|EN|ES|LA|OR|SA";
//Angola
        s_a["AO"] = "Bengo|Benguela|Bic|Cabinda|Cuando-Cubango|Cuanza Norte|Cuanza Sul|Cunene|Huambo|Huela|Luanda|Lunda Norte|Lunda Sul|Malange|Moxico|Namibe|Uege|Zaire";
        s_abbr["AO"] = "BGO|BGU|BIE|CAB|CCU|CNO|CUS|CNN|HUA|HUI|LUA|LNO|LSU|MAL|MOX|NAM|UIG|ZAI";
//Anguilla
        s_a["AI"] = "";
        s_abbr["AI"] = "";
//Antarctica
        s_a["AQ"] = "";
        s_abbr["AQ"] = "";
//Antigua and Barbuda
        s_a["AG"] = "Barbuda|Redonda|Saint George|Saint John|Saint Mary|Saint Paul|Saint Peter|Saint Philip";
        s_abbr["AG"] = "BA|RE|SA|SA|SA|SA|SA|SA";
//Argentina
        s_a["AR"] = "Buenos Aires|Catamarca|Chaco|Chubut|Ciudad Autnnoma de Buenos Aires|Cordoba|Corrientes|Entre Rios|Formosa|Jujuy|La Pampa|Mendoza|Misiones|Neuquen|Rio Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tierra del Fuego|Tucuman";
        s_abbr["AR"] = "B|K|H|U|C|X|W|E|P|Y|L|M|N|Q|R|A|J|D|Z|S|G|V|T";
//Armenia
        s_a["AM"] = "Aragacotn|Ararat|Armavir|Erevan|Gegarkunik'|Kotayk'|Lory|Sirak|Syunik'|Tavus|Vayoc Jor";
        s_abbr["AM"] = "AG|AR|AV|ER|GR|KT|LO|SH|SU|TV|VD";
//Aruba
        s_a["AW"] = "";
        s_abbr["AW"] = "";
//Australia
        s_a["AU"] = "Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia";
        s_abbr["AU"] = "ACT|NSW|NT|QLD|SA|TAS|VIC|WA";
//Austria
        s_a["AT"] = "Burgenland|Karnten|Niederosterreich|Oberosterreich|Salzburg|Steiermark|Tirol|Vorarlberg|Wien";
        s_abbr["AT"] = "BU|KA|NI|OB|SA|ST|TI|VO|WI";
//Azerbaijan
        s_a["AZ"] = "Abueron|Astara|Aucabudi|Audam|Audau|Austafa|Ausu|Baku|Balakun|Beyluqan|Burdu|Bilusuvar|Cubrayul|Culilabab|Daukusun|Duvuai|Fuzuli|Goyaay|Gudubuy|Guncu|Goranboy|Hacuqabul|Kurdumir|Kulbucur|Laaun|Lerik|Lunkuran|Lunkuran|Masallu|Minguaevir|Naftalan|Naxauvan|Neftaala|Ouuz|Qax|Qazax|Qubulu|Qobustan|Quba|Qubadlu|Qusar|Saatlu|Sabirabad|Salyan|Samux|Siyuzun|Sumqayut|Turtur|Tovuz|Ucar|Xaamaz|Xankundi|Xanlar|Xocalu|Xocavund|Xuzu|Yardumlu|Yevlax|Yevlax|Zaqatala|Zungilan|Zurdab|uamaxu|uuki|uuki|uumkir|uuua|uuua|uli Bayramlu|umiuli|usmayullu";
        s_abbr["AZ"] = "ABS|AST|AGC|AGM|AGS|AGA|AGU|BA|BAL|BEY|BAR|BIL|CAB|CAL|DAS|DAV|FUZ|GOY|GAD|GA|GOR|HAC|KUR|KAL|LAC|LER|LAN|LA|MAS|MI|NA|NX|NEF|OGU|QAX|QAZ|QAB|QOB|QBA|QBI|QUS|SAT|SAB|SAL|SMX|SIY|SM|TAR|TOV|UCA|XAC|XA|XAN|XCI|XVD|XIZ|YAR|YE|YEV|ZAQ|ZAN|ZAR|SMI|SA|SAK|SKR|SUS|SS|AB|IMI|ISM";
//Aland Islands
        s_a["AX"] = "";
        s_abbr["AX"] = "";
//Bahamas
        s_a["BS"] = "Acklins Islands|Berry Islands|Bimini and Cat Cay|Black Point|Cat Island|Central Abaco|Central Andros|Central Eleuthera|City of Freeport|Crooked Island and Long Cay|East Grand Bahama|Exuma|Grand Cay|Green Turtle Cay|Harbour Island|Hope Town|Inagua|Long Island|Mangrove Cay|Mayaguana|Moore's Island|New Providence|North Abaco|North Andros|North Eleuthera|Ragged Island|Rum Cay|San Salvador|South Abaco|South Andros|South Eleuthera|Spanish Wells|West Grand Bahama";
        s_abbr["BS"] = "AC|BY|BI|BP|CI|CO|CS|CE|FP|CK|EG|EX|GC|GT|HI|HT|IN|LI|MC|MG|MI|NP|NO|NS|NE|RI|RC|SS|SO|SA|SE|SW|WG";
//Bahrain
        s_a["BH"] = "Al Janubuyah|Al Manumah (Al uuuimah)|Al Muuarraq|Al Wusua|Ash Shamuluyah";
        s_abbr["BH"] = "AL|AL|AL|AL|AS";
//Bangladesh
        s_a["BD"] = "Barisal bibhag|Chittagong bibhag|Dhaka bibhag|Khulna bibhag|Rajshahi bibhag|Sylhet bibhag";
        s_abbr["BD"] = "BA|CH|DH|KH|RA|SY";
//Barbados
        s_a["BB"] = "Christ Church|Saint Andrew|Saint George|Saint James|Saint John|Saint Joseph|Saint Lucy|Saint Michael|Saint Peter|Saint Philip|Saint Thomas";
        s_abbr["BB"] = "CH|SA|SA|SA|SA|SA|SA|SA|SA|SA|SA";
//Belarus
        s_a["BY"] = "Bresckaja voblasc'|Homel'skaja voblasc'|Horad Minsk|Hrodzenskaja voblasc'|Mahileuskaja voblasc'|Minskaja voblasc'|Vicebskaja voblasc'";
        s_abbr["BY"] = "BR|HO|HM|HR|MA|MI|VI";
//Belgium
        s_a["BE"] = "Antwerpen|Brabant Wallon|Brussels-Capital Region|Hainaut|Liege|Limburg|Luxembourg|Namur|Oost-Vlaanderen|Vlaams-Brabant|West-Vlaanderen";
        s_abbr["BE"] = "VAN|WBR|BRU|WHT|WLG|VLI|WLX|WNA|VOV|VBR|VWV";
//Belize
        s_a["BZ"] = "Belize|Cayo|Corozal|Orange Walk|Stann Creek|Toledo";
        s_abbr["BZ"] = "BZ|CY|CZL|OW|SC|TOL";
//Benin
        s_a["BJ"] = "Alibori|Atakora|Atlantique|Borgou|Collines|Donga|Kouffo|Littoral|Mono|Oucmc|Plateau|Zou";
        s_abbr["BJ"] = "AL|AK|AQ|BO|CO|DO|KO|LI|MO|OU|PL|ZO";
//Bermuda
        s_a["BM"] = "";
        s_abbr["BM"] = "";
//Bhutan
        s_a["BT"] = "Bumthang|Chhukha|Dagana|Gasa|Ha|Lhuentse|Monggar|Paro|Pemagatshel|Punakha|Samdrup Jongkha|Samtee|Sarpang|Thimphu|Trashi Yangtse|Trashigang|Trongsa|Tsirang|Wangdue Phodrang|Zhemgang";
        s_abbr["BT"] = "BU|CH|DA|GA|HA|LH|MO|PA|PE|PU|SA|SA|SA|TH|TY|TR|TR|TS|WA|ZH";
//Bolivia, Plurinational State of
        s_a["BO"] = "Chuquisaca|Cochabamba|El Beni|La Paz|Oruro|Pando|Potose|Santa Cruz|Tarija";
        s_abbr["BO"] = "H|C|B|L|O|N|P|S|T";
//Bonaire, Sint Eustatius and Saba
        s_a["BQ"] = "";
        s_abbr["BQ"] = "";
//Bosnia and Herzegovina
        s_a["BA"] = "Bruko distrikt|Federacija Bosne i Hercegovine|Republika Srpska";
        s_abbr["BA"] = "BRC|BIH|SRP";
//Botswana
        s_a["BW"] = "Central|Ghanzi|Kgalagadi|Kgatleng|Kweneng|Ngamiland|North-East|North-West (Botswana)|South-East|Southern (Botswana)";
        s_abbr["BW"] = "CE|GH|KG|KL|KW|NG|NE|NW|SE|SO";
//Bouvet Island
        s_a["BV"] = "";
        s_abbr["BV"] = "";
//Brazil
        s_a["BR"] = "Acre|Alagoas|Amapa|Amazonas|Bahia|Ceara|Distrito Federal|Esperito Santo|Fernando de Noronha|Goias|Maranhao|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Paraeba|Parana|Para|Pernambuco|Piaue|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondonia|Roraima|Santa Catarina|Sao Paulo|Sergipe|Tocantins";
        s_abbr["BR"] = "AC|AL|AP|AM|BA|CE|DF|ES|FN|GO|MA|MT|MS|MG|PB|PR|PA|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO";
//British Indian Ocean Territory
        s_a["IO"] = "";
        s_abbr["IO"] = "";
//Brunei Darussalam
        s_a["BN"] = "Belait|Brunei-Muara|Temburong|Tutong";
        s_abbr["BN"] = "BE|BM|TE|TU";
//Bulgaria
        s_a["BG"] = "Blagoevgrad|Burgas|Dobrich|Gabrovo|Haskovo|Kardzhali|Kyustendil|Lovech|Montana|Pazardzhik|Pernik|Pleven|Plovdiv|Razgrad|Ruse|Shumen|Silistra|Sliven|Smolyan|Sofia|Sofia-Grad|Stara Zagora|Targovishte|Varna|Veliko Tarnovo|Vidin|Vratsa|Yambol";
        s_abbr["BG"] = "BL|BU|DO|GA|HA|KA|KY|LO|MO|PA|PE|PL|PL|RA|RU|SH|SI|SL|SM|SO|SO|ST|TA|VA|VE|VI|VR|YA";
//Burkina Faso
        s_a["BF"] = "Boucle du Mouhoun|Cascades|Centre|Centre-Est|Centre-Nord|Centre-Ouest|Centre-Sud|Est|Hauts-Bassins|Nord|Plateau-Central|Sahel|Sud-Ouest";
        s_abbr["BF"] = "BO|CA|CE|CE|CE|CE|CE|ES|HA|NO|PL|SA|SU";
//Burundi
        s_a["BI"] = "Bubanza|Bujumbura Mairie|Bujumbura Rural|Bururi|Cankuzo|Cibitoke|Gitega|Karuzi|Kayanza|Kirundo|Makamba|Muramvya|Mwaro|Ngozi|Rutana|Ruyigi";
        s_abbr["BI"] = "BB|BM|BL|BR|CA|CI|GI|KR|KY|KI|MA|MU|MW|NG|RT|RY";
//Cambodia
        s_a["KH"] = "Banteay Mean Chey|Battambang|Kach Kong|Kampong Cham|Kampong Chhnang|Kampong Speu|Kampong Thom|Kampot|Kandal|Krachoh|Krong Kaeb|Krong Pailin|Krong Preah Sihanouk|Mondol Kiri|Otdar Mean Chey|Phnom Penh|Pousaat|Preah Vihear|Prey Veaeng|Rotanak Kiri|Siem Reab|Stueng Traeng|Svaay Rieng|Taakaev";
        s_abbr["KH"] = "BA|BA|KA|KA|KA|KA|KA|KA|KA|KR|KR|KR|KR|MO|OT|PH|PO|PR|PR|RO|SI|ST|SV|TA";
//Cameroon
        s_a["CM"] = "Adamaoua|Centre|East|Far North|Littoral|North|North-West (Cameroon)|South|South-West|West";
        s_abbr["CM"] = "AD|CE|ES|EN|LT|NO|NW|SU|SW|OU";
//Canada
        s_a["CA"] = "Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland and Labrador|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon";
        s_abbr["CA"] = "AB|BC|MB|NB|NL|NT|NS|NU|ON|PE|QC|SK|YT";
//Cape Verde
        s_a["CV"] = "Ilhas de Barlavento|Ilhas de Sotavento";
        s_abbr["CV"] = "B|S";
//Cayman Islands
        s_a["KY"] = "";
        s_abbr["KY"] = "";
//Cote d'Ivoire
        s_a["CI"] = "18 Montagnes (Rcgion des)|Agncbi (Rcgion de l')|Bafing (Rcgion du)|Bas-Sassandra (Rcgion du)|Denguclc (Rcgion du)|Fromager (Rcgion du)|Haut-Sassandra (Rcgion du)|Lacs (Rcgion des)|Lagunes (Rcgion des)|Marahouc (Rcgion de la)|Moyen-Cavally (Rcgion du)|Moyen-Comoc (Rcgion du)|Nzi-Comoc (Rcgion)|Savanes (Rcgion des)|Sud-Bandama (Rcgion du)|Sud-Comoc (Rcgion du)|Vallce du Bandama (Rcgion de la)|Worodouqou (Rcgion du)|Zanzan (Rcgion du)";
        s_abbr["CI"] = "18|AG|BA|BA|DE|FR|HA|LA|LA|MA|MO|MO|NZ|SA|SU|SU|VA|WO|ZA";
//Central African Republic
        s_a["CF"] = "Bamingui-Bangoran|Bangui|Basse-Kotto|Gribingui|Haut-Mbomou|Haute-Kotto|Haute-Sangha / Mambcrc-Kadci|Kcmo-Gribingui|Lobaye|Mbomou|Nana-Mambcrc|Ombella-M'poko|Ouaka|Ouham|Ouham-Pendc|Sangha|Vakaga";
        s_abbr["CF"] = "BB|BGF|BK|KB|HM|HK|HS|KG|LB|MB|NM|MP|UK|AC|OP|SE|VK";
//Chad
        s_a["TD"] = "Al Bauhuah|Al Buhuayrah|uajjar Lamus|Bahur al Ghazul|Burku|Innudu|Kunim|Luqun al Gharbu|Luqun ash Sharqu|Madunat Injamunu|Mundul|Muyu Kubbu al Gharbu|Muyu Kubbu ash Sharqu|Quru|Salumut|Shuru al Awsau|Shuru Buqirmu|Sulu|Tibastu|Tunjilu|Wadduy|Wudu Furu";
        s_abbr["TD"] = "BA|LC|HL|BG|BO|EN|KA|LO|LR|ND|MA|MO|ME|GR|SA|MC|CB|SI|TI|TA|OD|WF";
//Chile
        s_a["CL"] = "Aiscn del General Carlos Ibaiez del Campo|Antofagasta|Araucanea|Arica y Parinacota|Atacama|Beo-Beo|Coquimbo|Libertador General Bernardo O'Higgins|Los Lagos|Los Reos|Magallanes y Antartica Chilena|Maule|Reginn Metropolitana de Santiago|Tarapaca|Valparaeso";
        s_abbr["CL"] = "AI|AN|AR|AP|AT|BI|CO|LI|LL|LR|MA|ML|RM|TA|VS";
//China
        s_a["CN"] = "Anhui|Aomen (Macau)|Beijing|Chongqing|Fujian|Gansu|Guangdong|Guangxi|Guizhou|Hainan|Hebei|Heilongjiang|Henan|Hubei|Hunan|Jiangsu|Jiangxi|Jilin|Liaoning|Nei Mongol|Ningxia|Qinghai|Shaanxi|Shandong|Shanghai|Shanxi|Sichuan|Taiwan|Tianjin|Xianggang (Hong-Kong)|Xinjiang|Xizang|Yunnan|Zhejiang";
        s_abbr["CN"] = "AN|AO|BE|CH|FU|GA|GU|GU|GU|HA|HE|HE|HE|HU|HU|JI|JI|JI|LI|NE|NI|QI|SH|SH|SH|SH|SI|TA|TI|XI|XI|XI|YU|ZH";
//Christmas Island
        s_a["CX"] = "";
        s_abbr["CX"] = "";
//Cocos (Keeling) Islands
        s_a["CC"] = "";
        s_abbr["CC"] = "";
//Colombia
        s_a["CO"] = "Amazonas|Antioquia|Arauca|Atlantico|Bolevar|Boyaca|Caldas|Caqueta|Casanare|Cauca|Cnrdoba|Cesar|Chocn|Cundinamarca|Distrito Capital de Bogota|Guainea|Guaviare|Huila|La Guajira|Magdalena|Meta|Nariio|Norte de Santander|Putumayo|Quindeo|Risaralda|San Andrcs, Providencia y Santa Catalina|Santander|Sucre|Tolima|Valle del Cauca|Vaupcs|Vichada";
        s_abbr["CO"] = "AMA|ANT|ARA|ATL|BOL|BOY|CAL|CAQ|CAS|CAU|COR|CES|CHO|CUN|DC|GUA|GUV|HUI|LAG|MAG|MET|NAR|NSA|PUT|QUI|RIS|SAP|SAN|SUC|TOL|VAC|VAU|VID";
//Comoros
        s_a["KM"] = "Andjazidja (Anjazujah)|Andjouan (Anjwun)|Mouhili (Muhulu)";
        s_abbr["KM"] = "G|A|M";
//Congo
        s_a["CG"] = "Bouenza|Brazzaville|Cuvette|Cuvette-Ouest|Kouilou|Lckoumou|Likouala|Niari|Plateaux|Pool|Sangha";
        s_abbr["CG"] = "BO|BZV|CU|CU|KO|LC|LI|NI|PL|PO|SA";
//Congo, The Democratic Republic of the
        s_a["CD"] = "Equateur|Bandundu|Bas-Congo|Haut-Congo|Kasai-Occidental|Kasai-Oriental|Katanga|Kinshasa|Maniema|Nord-Kivu|Orientale|Sud-Kivu";
        s_abbr["CD"] = "EQ|BN|BC|HC|KW|KE|KA|KN|MA|NK|OR|SK";
//Cook Islands
        s_a["CK"] = "";
        s_abbr["CK"] = "";
//Costa Rica
        s_a["CR"] = "Alajuela|Cartago|Guanacaste|Heredia|Limnn|Puntarenas|San Josc";
        s_abbr["CR"] = "A|C|G|H|L|P|SJ";
//Croatia
        s_a["HR"] = "Bjelovarsko-bilogorska uupanija|Brodsko-posavska uupanija|Dubrovauko-neretvanska uupanija|Grad Zagreb|Istarska uupanija|Karlovauka uupanija|Koprivniuko-kriuevauka uupanija|Krapinsko-zagorska uupanija|Liuko-senjska uupanija|Meuimurska uupanija|Osjeuko-baranjska uupanija|Poueuko-slavonska uupanija|Primorsko-goranska uupanija|Sisauko-moslavauka uupanija|Splitsko-dalmatinska uupanija|Varaudinska uupanija|Virovitiuko-podravska uupanija|Vukovarsko-srijemska uupanija|Zadarska uupanija|Zagrebauka uupanija|uibensko-kninska uupanija";
        s_abbr["HR"] = "BJ|BR|DU|GR|IS|KA|KO|KR|LI|ME|OS|PO|PR|SI|SP|VA|VI|VU|ZA|ZA|UI";
//Cuba
        s_a["CU"] = "Camaguey|Ciego de Avila|Cienfuegos|Ciudad de La Habana|Granma|Guantanamo|Holguen|Isla de la Juventud|La Habana|Las Tunas|Matanzas|Pinar del Rio|Sancti Speritus|Santiago de Cuba|Villa Clara";
        s_abbr["CU"] = "CA|CI|CI|CI|GR|GU|HO|IS|LA|LA|MA|PI|SA|SA|VI";
//Curaaao
        s_a["CW"] = "";
        s_abbr["CW"] = "";
//Cyprus
        s_a["CY"] = "Ammnchostos|Keruneia|Larnaka|Lefkosea|Lemesns|Pafos";
        s_abbr["CY"] = "AM|KE|LA|LE|LE|PA";
//Czech Republic
        s_a["CZ"] = "Ustecku kraj|Jihomoravsku kraj|Jihouesku kraj|Karlovarsku kraj|Kralovchradecku kraj|Liberecku kraj|Moravskoslezsku kraj|Olomoucku kraj|Pardubicku kraj|Plzeusku kraj|Praha, hlavne musto|Stuedouesku kraj|Vysouina|Zlensku kraj";
        s_abbr["CZ"] = "US|JM|JC|KA|KR|LI|MO|OL|PA|PL|PR|ST|VY|ZL";
//Denmark
        s_a["DK"] = "Hovedstaden|Midtjylland|Nordjylland|Sjalland|Syddanmark";
        s_abbr["DK"] = "HO|MI|NO|SJ|SY";
//Djibouti
        s_a["DJ"] = "Ali Sabieh|Arta|Dikhil|Djibouti|Obock|Tadjourah";
        s_abbr["DJ"] = "AS|AR|DI|DJ|OB|TA";
//Dominica
        s_a["DM"] = "Saint Andrew|Saint David|Saint George|Saint John|Saint Joseph|Saint Luke|Saint Mark|Saint Patrick|Saint Paul|Saint Peter";
        s_abbr["DM"] = "SA|SA|SA|SA|SA|SA|SA|SA|SA|SA";
//Dominican Republic
        s_a["DO"] = "Azua|Bahoruco|Barahona|Dajabnn|Distrito Nacional (Santo Domingo)|Duarte|El Seybo [El Seibo]|Espaillat|Hato Mayor|Independencia|La Altagracia|La Estrelleta [Eleas Piia]|La Romana|La Vega|Marea Trinidad Sanchez|Monseior Nouel|Monte Cristi|Monte Plata|Pedernales|Peravia|Puerto Plata|Salcedo|Samana|San Cristnbal|San Juan|San Pedro de Macores|Santiago|Santiago Rodreguez|Sanchez Ramerez|Valverde";
        s_abbr["DO"] = "AZ|BA|BA|DA|DI|DU|EL|ES|HA|IN|LA|LA|LA|LA|MA|MO|MO|MO|PE|PE|PU|SA|SA|SA|SA|SA|SA|SA|SA|VA";
//Ecuador
        s_a["EC"] = "Azuay|Bolevar|Caiar|Carchi|Chimborazo|Cotopaxi|El Oro|Esmeraldas|Galapagos|Guayas|Imbabura|Loja|Los Reos|Manabe|Morona-Santiago|Napo|Orellana|Pastaza|Pichincha|Santa Elena|Santo Domingo de los Tsachilas|Sucumbeos|Tungurahua|Zamora-Chinchipe";
        s_abbr["EC"] = "A|B|F|C|H|X|O|E|W|G|I|L|R|M|S|N|D|Y|P|SE|SD|U|T|Z";
//Egypt
        s_a["EG"] = "Ad Daqahluyah|Al Bahr al Ahmar|Al Buhayrah|Al Fayyum|Al Gharbuyah|Al Iskandaruyah|Al Ismuuluyah|Al Juzah|Al Minyu|Al Minufuyah|Al Qalyubuyah|Al Quhirah|Al Wudu al Jadud|As Suways|As Sudis min Uktubar|Ash Sharquyah|Aswun|Asyut|Banu Suwayf|Bur Saud|Dumyut|Huulwun|Janub Sunu'|Kafr ash Shaykh|Matruh|Qinu|Shamal Sunu'|Suhuj";
        s_abbr["EG"] = "DK|BA|BH|FYM|GH|ALX|IS|GZ|MN|MNF|KB|C|WAD|SUZ|SU|SHR|ASN|AST|BNS|PTS|DT|HU|JS|KFS|MT|KN|SIN|SHG";
//El Salvador
        s_a["SV"] = "Ahuachapan|Cabaias|Chalatenango|Cuscatlan|La Libertad|La Paz|La Uninn|Morazan|San Miguel|San Salvador|San Vicente|Santa Ana|Sonsonate|Usulutan";
        s_abbr["SV"] = "AH|CA|CH|CU|LI|PA|UN|MO|SM|SS|SV|SA|SO|US";
//Equatorial Guinea
        s_a["GQ"] = "Annobnn|Bioko Norte|Bioko Sur|Centro Sur|Kic-Ntem|Litoral|Reginn Continental|Reginn Insular|Wele-Nzas";
        s_abbr["GQ"] = "AN|BN|BS|CS|KN|LI|C|I|WN";
//Eritrea
        s_a["ER"] = "Anseba|Debub|Debubawi Keyih Bahri [Debub-Keih-Bahri]|Gash-Barka|Maakel [Maekel]|Semenawi Keyih Bahri [Semien-Keih-Bahri]";
        s_abbr["ER"] = "AN|DU|DK|GB|MA|SK";
//Estonia
        s_a["EE"] = "Harjumaa|Hiiumaa|Ida-Virumaa|Jarvamaa|Jogevamaa|Laane-Virumaa|Laanemaa|Parnumaa|Polvamaa|Raplamaa|Saaremaa|Tartumaa|Valgamaa|Vorumaa|Viljandimaa";
        s_abbr["EE"] = "HA|HI|ID|JA|JO|LA|LA|PA|PO|RA|SA|TA|VA|VO|VI";
//Ethiopia
        s_a["ET"] = "Bunshangul Gumuz|Diru Dawa|Gambula Hizboch|Hureru Hizb|Oromuya|Sumalu|Tigray|YeDebub Bihuroch Bihureseboch na Hizboch|udus ubeba|ufar|umara";
        s_abbr["ET"] = "BE|DD|GA|HA|OR|SO|TI|SN|AA|AF|AM";
//Falkland Islands (Malvinas)
        s_a["FK"] = "";
        s_abbr["FK"] = "";
//Faroe Islands
        s_a["FO"] = "";
        s_abbr["FO"] = "";
//Fiji
        s_a["FJ"] = "Central|Eastern|Northern|Rotuma|Western";
        s_abbr["FJ"] = "C|E|N|R|W";
//Finland
        s_a["FI"] = "Ahvenanmaan laani|Etela-Suomen laani|Ita-Suomen laani|Lapin laani|Lansi-Suomen laani|Oulun laani";
        s_abbr["FI"] = "AL|ES|IS|LL|LS|OL";
//France
        s_a["FR"] = "Alsace|Aquitaine|Auvergne|Ile-de-France|Basse-Normandie|Bourgogne|Bretagne|Centre|Champagne-Ardenne|Clipperton|Corse|Franche-Comtc|Guadeloupe|Guyane|Haute-Normandie|Languedoc-Roussillon|Limousin|Lorraine|Martinique|Mayotte|Midi-Pyrcnces|Nord - Pas-de-Calais|Nouvelle-Calcdonie|Pays de la Loire|Picardie|Poitou-Charentes|Polyncsie franaaise|Provence-Alpes-Cote d'Azur|Rcunion|Rhone-Alpes|Saint-Barthclemy|Saint-Martin|Saint-Pierre-et-Miquelon|Terres australes franaaises|Wallis-et-Futuna";
        s_abbr["FR"] = "A|B|C|J|P|D|E|F|G|CP|H|I|GP|GF|Q|K|L|M|MQ|YT|N|O|NC|R|S|T|PF|U|RE|V|BL|MF|PM|TF|WF";
//French Guiana
        s_a["GF"] = "";
        s_abbr["GF"] = "";
//French Polynesia
        s_a["PF"] = "";
        s_abbr["PF"] = "";
//French Southern Territories
        s_a["TF"] = "";
        s_abbr["TF"] = "";
//Gabon
        s_a["GA"] = "Estuaire|Haut-Ogoouc|Moyen-Ogoouc|Ngounic|Nyanga|Ogoouc-Ivindo|Ogoouc-Lolo|Ogoouc-Maritime|Woleu-Ntem";
        s_abbr["GA"] = "ES|HA|MO|NG|NY|OG|OG|OG|WO";
//Gambia
        s_a["GM"] = "Banjul|Central River|Lower River|North Bank|Upper River|Western";
        s_abbr["GM"] = "B|M|L|N|U|W";
//Georgia
        s_a["GE"] = "Abkhazia|Ajaria|Guria|Imeretui|Kakhetui|Kuvemo Kuartuli|Mtsukhetua-Mtuianetui|Racha-Lechukhumi-Kuvemo Svanetui|Samegrelo-Zemo Svanetui|Samtsukhe-Javakhetui|Shida Kuartuli|Tubilisi";
        s_abbr["GE"] = "AB|AJ|GU|IM|KA|KK|MM|RL|SZ|SJ|SK|TB";
//Germany
        s_a["DE"] = "Baden-Wurttemberg|Bayern|Berlin|Brandenburg|Bremen|Hamburg|Hessen|Mecklenburg-Vorpommern|Niedersachsen|Nordrhein-Westfalen|Rheinland-Pfalz|Saarland|Sachsen|Sachsen-Anhalt|Schleswig-Holstein|Thuringen";
        s_abbr["DE"] = "BW|BY|BE|BB|HB|HH|HE|MV|NI|NW|RP|SL|SN|ST|SH|TH";
//Ghana
        s_a["GH"] = "Ashanti|Brong-Ahafo|Central|Eastern|Greater Accra|Northern|Upper East|Upper West|Volta|Western";
        s_abbr["GH"] = "AH|BA|CP|EP|AA|NP|UE|UW|TV|WP";
//Gibraltar
        s_a["GI"] = "";
        s_abbr["GI"] = "";
//Greece
        s_a["GR"] = "Agio Oros|Anatoliki Makedonia kai Thraki|Attiki|Dytiki Ellada|Dytiki Makedonia|Ionia Nisia|Ipeiros|Kentriki Makedonia|Kriti|Notio Aigaio|Peloponnisos|Sterea Ellada|Thessalia|Voreio Aigaio";
        s_abbr["GR"] = "AG|A|I|G|C|F|D|B|M|L|J|H|E|K";
//Greenland
        s_a["GL"] = "Kommune Kujalleq|Kommuneqarfik Sermersooq|Qaasuitsup Kommunia|Qeqqata Kommunia";
        s_abbr["GL"] = "KU|SM|QA|QE";
//Grenada
        s_a["GD"] = "Saint Andrew|Saint David|Saint George|Saint John|Saint Mark|Saint Patrick|Southern Grenadine Islands";
        s_abbr["GD"] = "SA|SA|SA|SA|SA|SA|SO";
//Guadeloupe
        s_a["GP"] = "";
        s_abbr["GP"] = "";
//Guam
        s_a["GU"] = "";
        s_abbr["GU"] = "";
//Guatemala
        s_a["GT"] = "Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Petcn|Quetzaltenango|Quichc|Retalhuleu|Sacatepcquez|San Marcos|Santa Rosa|Solola|Suchitepcquez|Totonicapan|Zacapa";
        s_abbr["GT"] = "AV|BV|CM|CQ|PR|ES|GU|HU|IZ|JA|JU|PE|QZ|QC|RE|SA|SM|SR|SO|SU|TO|ZA";
//Guernsey
        s_a["GG"] = "";
        s_abbr["GG"] = "";
//Guinea
        s_a["GN"] = "Bokc|Conakry|Faranah|Kankan|Kindia|Labc|Mamou|Nzcrckorc";
        s_abbr["GN"] = "B|C|F|K|D|L|M|N";
//Guinea-Bissau
        s_a["GW"] = "Bissau|Leste|Norte|Sul";
        s_abbr["GW"] = "BS|L|N|S";
//Guyana
        s_a["GY"] = "Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo";
        s_abbr["GY"] = "BA|CU|DE|EB|ES|MA|PM|PT|UD|UT";
//Haiti
        s_a["HT"] = "Artibonite|Centre|Grande-Anse|Nord|Nord-Est|Nord-Ouest|Ouest|Sud|Sud-Est";
        s_abbr["HT"] = "AR|CE|GA|ND|NE|NO|OU|SD|SE";
//Heard Island and McDonald Islands
        s_a["HM"] = "";
        s_abbr["HM"] = "";
//Holy See (Vatican City State)
        s_a["VA"] = "";
        s_abbr["VA"] = "";
//Honduras
        s_a["HN"] = "Atlantida|Choluteca|Colnn|Comayagua|Copan|Cortcs|El Paraeso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahea|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro";
        s_abbr["HN"] = "AT|CH|CL|CM|CP|CR|EP|FM|GD|IN|IB|LP|LE|OC|OL|SB|VA|YO";
//Hong Kong
        s_a["HK"] = "";
        s_abbr["HK"] = "";
//Hungary
        s_a["HU"] = "Erd|Baranya|Bacs-Kiskun|Bckcs|Bckcscsaba|Borsod-Abaoj-Zemplcn|Budapest|Csongrad|Debrecen|Dunaojvaros|Eger|Fejcr|Gyur|Gyur-Moson-Sopron|Hajdo-Bihar|Hndmezuvasarhely|Heves|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemct|Komarom-Esztergom|Miskolc|Nagykanizsa|Nngrad|Nyeregyhaza|Pccs|Pest|Salgntarjan|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szckesfehcrvar|Szeged|Szekszard|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprcm|Veszprcm (county)|Zala|Zalaegerszeg";
        s_abbr["HU"] = "ER|BA|BK|BE|BC|BZ|BU|CS|DE|DU|EG|FE|GY|GS|HB|HV|HE|JN|KV|KM|KE|MI|NK|NO|NY|PS|PE|ST|SO|SN|SZ|SF|SD|SS|SK|SH|TB|TO|VA|VM|VE|ZA|ZE";
//Iceland
        s_a["IS"] = "Austurland|Hofudborgarsvadid|Nordurland eystra|Nordurland vestra|Reykjavek|Sudurland|Sudurnes|Vestfirdir|Vesturland";
        s_abbr["IS"] = "AU|HO|NO|NO|0|SU|SU|VE|VE";
//India
        s_a["IN"] = "Andaman and Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Daman and Diu|Delhi|Dadra and Nagar Haveli|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nugaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nudu|Tripura|Uttar Pradesh|Uttaranchal|West Bengal";
        s_abbr["IN"] = "AN|AP|AR|AS|BR|CH|CT|DD|DL|DN|GA|GJ|HR|HP|JK|JH|KA|KL|LD|MP|MH|MN|ML|MZ|NL|OR|PY|PB|RJ|SK|TN|TR|UP|UL|WB";
//Indonesia
        s_a["ID"] = "Jawa|Kalimantan|Maluku|Nusa Tenggara|Papua|Sulawesi|Sumatera";
        s_abbr["ID"] = "JW|KA|MA|NU|IJ|SL|SM";
//Iran, Islamic Republic of
        s_a["IR"] = "Ardabul|Bushehr|Chahur Mahull va Bakhtuuru|Eufahun|Furs|Golestun|Gulun|Hamadun|Hormozgun|Kermun|Kermunshuh|Khorusun-e Janubu|Khorusun-e Razavu|Khorusun-e Shemulu|Khuzestun|Kohguluyeh va Buyer Ahmad|Kordestun|Lorestun|Markazu|Muzandarun|Qazvun|Qom|Semnun|Sustun va Baluchestun|Tehrun|Yazd|Zanjun|uzarbuyjun-e Gharbu|uzarbuyjun-e Sharqu|ulum";
        s_abbr["IR"] = "AR|BU|CH|EU|FU|GO|GU|HA|HO|KE|KE|KH|KH|KH|KH|KO|KO|LO|MA|MU|QA|QO|SE|SU|TE|YA|ZA|UZ|UZ|UL";
//Iraq
        s_a["IQ"] = "Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najef|Arbil|As Sulaymaniyah|At Ta'mim|Babil|Baghdad|Dahuk|Dhi Qar|Diyala|Karbala'|Maysan|Ninawa|Salah ad Din|Wasit";
        s_abbr["IQ"] = "AN|BA|MU|QA|NA|AR|SW|TS|BB|BG|DA|DQ|DI|KA|MA|NI|SD|WA";
//Ireland
        s_a["IE"] = "Connacht|Leinster|Munster|Ulster";
        s_abbr["IE"] = "C|L|M|U";
//Isle of Man
        s_a["IM"] = "";
        s_abbr["IM"] = "";
//Israel
        s_a["IL"] = "HaDarom|HaMerkaz|HaZafon|Hefa|Tel-Aviv|Yerushalayim Al Quds";
        s_abbr["IL"] = "D|M|Z|HA|TA|JM";
//Italy
        s_a["IT"] = "Abruzzo|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d'Aosta|Veneto";
        s_abbr["IT"] = "AB|BA|CA|CA|EM|FR|LA|LI|LO|MA|MO|PI|PU|SA|SI|TO|TR|UM|VA|VE";
//Jamaica
        s_a["JM"] = "Clarendon|Hanover|Kingston|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland";
        s_abbr["JM"] = "CL|HA|KI|MA|PO|SA|SA|SA|SA|SA|SA|SA|TR|WE";
//Japan
        s_a["JP"] = "Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gunma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi";
        s_abbr["JP"] = "AI|AK|AO|CH|EH|FU|FU|FU|GI|GU|HI|HO|HY|IB|IS|IW|KA|KA|KA|KO|KU|KY|MI|MI|MI|NA|NA|NA|NI|OI|OK|OK|OS|SA|SA|SH|SH|SH|TO|TO|TO|TO|TO|WA|YA|YA|YA";
//Jersey
        s_a["JE"] = "";
        s_abbr["JE"] = "";
//Jordan
        s_a["JO"] = "Al Balqu'|Al Karak|Al Mafraq|Al Aqabah|Amman|Az Zarqu'|Au uafulah|Irbid|Jarash|Maun|Mudabu|Ajlun";
        s_abbr["JO"] = "BA|KA|MA|AQ|AM|AZ|AT|JR|JA|MN|MD|AJ";
//Kazakhstan
        s_a["KZ"] = "Almaty|Almaty oblysy|Aqmola oblysy|Aqtobe oblysy|Astana|Atyrau oblysy|Batys Quzaqstan oblysy|Mangghystau oblysy|Ongtustik Qazaqstan oblysy|Pavlodar oblysy|Qaraghandy oblysy|Qostanay oblysy|Qyzylorda oblysy|Shyghys Qazaqstan oblysy|Soltustik Quzaqstan oblysy|Zhambyl oblysy";
        s_abbr["KZ"] = "ALA|ALM|AKM|AKT|AST|ATY|ZAP|MAN|YUZ|PAV|KAR|KUS|KZY|VOS|SEV|ZHA";
//Kenya
        s_a["KE"] = "Central|Coast|Eastern|Nairobi Municipality|North-Eastern Kaskazini Mashariki|Rift Valley|Western Magharibi";
        s_abbr["KE"] = "CE|CO|EA|NA|NO|RI|WE";
//Kiribati
        s_a["KI"] = "Gilbert Islands|Line Islands|Phoenix Islands";
        s_abbr["KI"] = "G|L|P";
//Korea, Democratic People's Republic of
        s_a["KP"] = "Chagang-do|Hamgyung-bukto|Hamgyung-namdo|Hwanghae-bukto|Hwanghae-namdo|Kangwun-do|Nasun (Najin-Sunbong)|Puyungan-bukto|Puyungan-namdo|Puyungyang|Yanggang-do";
        s_abbr["KP"] = "CH|HA|HA|HW|HW|KA|NA|PU|PU|PU|YA";
//Korea, Republic of
        s_a["KR"] = "Busan Gwang'yeogsi|Chungcheongbukdo|Chungcheongnamdo|Daegu Gwang'yeogsi|Daejeon Gwang'yeogsi|Gang'weondo|Gwangju Gwang'yeogsi|Gyeonggido|Gyeongsangbukdo|Gyeongsangnamdo|Incheon Gwang'yeogsi|Jejudo|Jeonrabukdo|Jeonranamdo|Seoul Teugbyeolsi|Ulsan Gwang'yeogsi";
        s_abbr["KR"] = "BU|CH|CH|DA|DA|GA|GW|GY|GY|GY|IN|JE|JE|JE|SE|UL";
//Kuwait
        s_a["KW"] = "Al Ahmadi|Al Farwunuyah|Al Jahrah|Al Kuwayt|Hawallu";
        s_abbr["KW"] = "AH|FA|JA|KU|HA";
//Kyrgyzstan
        s_a["KG"] = "Batken|Bishkek|Chu|Jalal-Abad|Naryn|Osh|Talas|Ysyk-Kol";
        s_abbr["KG"] = "B|GB|C|J|N|O|T|Y";
//Lao People's Democratic Republic
        s_a["LA"] = "Attapu|Bokeo|Bolikhamxai|Champasak|Houaphan|Khammouan|Louang Namtha|Louangphabang|Oudomxai|Phongsali|Salavan|Savannakhct|Vientiane|Vientiane|Xaignabouli|Xckong|Xiangkhoang|Xiasomboun";
        s_abbr["LA"] = "AT|BK|BL|CH|HO|KH|LM|LP|OU|PH|SL|SV|VI|VT|XA|XE|XI|XN";
//Latvia
        s_a["LV"] = "Aizkraukle Apriuuis|Aluksne Apriuuis|Balvi Apriuuis|Bauska Apriuuis|Cusis Apriuuis|Daugavpils|Daugavpils Apriuuis|Dobele Apriuuis|Gulbene Apriuuis|Jelgava|Jelgava Apriuuis|Jurmala|Jukabpils Apriuuis|Kruslava Apriuuis|Kulduga Apriuuis|Liepuja|Liepuja Apriuuis|Limbaui Apriuuis|Ludza Apriuuis|Madona Apriuuis|Ogre Apriuuis|Preiui Apriuuis|Ruzekne|Ruzekne Apriuuis|Ruga|Ruga Apriuuis|Saldus Apriuuis|Talsi Apriuuis|Tukums Apriuuis|Valka Apriuuis|Valmiera Apriuuis|Ventspils|Ventspils Apriuuis";
        s_abbr["LV"] = "AI|AL|BL|BU|CE|DGV|DA|DO|GU|JEL|JL|JUR|JK|KR|KU|LPX|LE|LM|LU|MA|OG|PR|REZ|RE|RIX|RI|SA|TA|TU|VK|VM|VEN|VE";
//Lebanon
        s_a["LB"] = "Aakkar|Baalbek-Hermel|Bcqaa|Beyrouth|Liban-Nord|Liban-Sud|Mont-Liban|Nabatiyc";
        s_abbr["LB"] = "AK|BH|BI|BA|AS|JA|JL|NA";
//Lesotho
        s_a["LS"] = "Berea|Butha-Buthe|Leribe|Mafeteng|Maseru|Mohale's Hoek|Mokhotlong|Qacha's Nek|Quthing|Thaba-Tseka";
        s_abbr["LS"] = "D|B|C|E|A|F|J|H|G|K";
//Liberia
        s_a["LR"] = "Bomi|Bong|Grand Bassa|Grand Cape Mount|Grand Gedeh|Grand Kru|Lofa|Margibi|Maryland|Montserrado|Nimba|Rivercess|Sinoe";
        s_abbr["LR"] = "BM|BG|GB|CM|GG|GK|LO|MG|MY|MO|NI|RI|SI";
//Libya
        s_a["LY"] = "Al Buunun|Al Jabal al Akhuar|Al Jabal al Gharbu|Al Jifurah|Al Jufrah|Al Kufrah|Al Marj|Al Marqab|Al Wuhuut|An Nuqau al Khams|Az Zuwiyah|Banghuzu|Darnah|Ghut|Jaghbub|Miurutah|Murzuq|Nulut|Sabhu|Surt|Wudu al uayut|Wudu ash Shuuiu|uarubulus";
        s_abbr["LY"] = "BU|JA|JG|JI|JU|KF|MJ|MB|WA|NQ|ZA|BA|DR|GT|JB|MI|MQ|NL|SB|SR|WD|WS|TB";
//Liechtenstein
        s_a["LI"] = "Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg|Vaduz";
        s_abbr["LI"] = "BA|ES|GA|MA|PL|RU|SC|SC|TR|TR|VA";
//Lithuania
        s_a["LT"] = "Alytaus Apskritis|Kauno Apskritis|Klaipudos Apskritis|Marijampolus Apskritis|Panevuuio Apskritis|Tauragcs Apskritis|Teluiu Apskritis|Utenos Apskritis|Vilniaus Apskritis|uiauliu Apskritis";
        s_abbr["LT"] = "AL|KU|KL|MR|PN|TA|TE|UT|VL|SA";
//Luxembourg
        s_a["LU"] = "Diekirch|Grevenmacher|Luxembourg";
        s_abbr["LU"] = "D|G|L";
//Macao
        s_a["MO"] = "";
        s_abbr["MO"] = "";
//Macedonia, Republic of
        s_a["MK"] = "Aerodrom|Arauinovo|Berovo|Bitola|Bogdanci|Bogovinje|Bosilovo|Brvenica|Butel|Centar|Centar uupa|Debar|Debarca|Deluevo|Demir Hisar|Demir Kapija|Dojran|Dolneni|Drugovo|Gazi Baba|Gevgelija|Gjorue Petrov|Gostivar|Gradsko|Ilinden|Jegunovce|Karbinci|Karpou|Kavadarci|Kisela Voda|Kiuevo|Konue|Kouani|Kratovo|Kriva Palanka|Krivogautani|Kruuevo|Kumanovo|Lipkovo|Lozovo|Makedonska Kamenica|Makedonski Brod|Mavrovo-i-Rostuua|Mogila|Negotino|Novaci|Novo Selo|Ohrid|Oslomej|Pehuevo|Petrovec|Plasnica|Prilep|Probiutip|Radoviu|Rankovce|Resen|Rosoman|Saraj|Sopiute|Staro Nagoriuane|Struga|Strumica|Studeniuani|Sveti Nikole|Tearce|Tetovo|Valandovo|Vasilevo|Veles|Vevuani|Vinica|Vraneutica|Vrapuiute|Zajas|Zelenikovo|Zrnovci|utip|uuto Orizari|uelino|uair|uauka|ueuinovo-Obleuevo|uuuer Sandevo";
        s_abbr["MK"] = "AE|AR|BE|BI|BO|BO|BO|BR|BU|CE|CE|DE|DE|DE|DE|DE|DO|DO|DR|GA|GE|GJ|GO|GR|IL|JE|KA|KA|KA|KI|KI|KO|KO|KR|KR|KR|KR|KU|LI|LO|MA|MA|MA|MO|NE|NO|NO|OH|OS|PE|PE|PL|PR|PR|RA|RA|RE|RO|SA|SO|ST|ST|ST|ST|SV|TE|TE|VA|VA|VE|VE|VI|VR|VR|ZA|ZE|ZR|UT|UU|UE|UA|UA|UE|UU";
//Madagascar
        s_a["MG"] = "Antananarivo|Antsiranana|Fianarantsoa|Mahajanga|Toamasina|Toliara";
        s_abbr["MG"] = "T|D|F|M|A|U";
//Malawi
        s_a["MW"] = "Central Region|Northern Region|Southern Region";
        s_abbr["MW"] = "C|N|S";
//Malaysia
        s_a["MY"] = "Johor|Kedah|Kelantan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan Kuala Lumpur|Wilayah Persekutuan Labuan|Wilayah Persekutuan Putrajaya";
        s_abbr["MY"] = "JO|KE|KE|ME|NE|PA|PE|PE|PU|SA|SA|SE|TE|WI|WI|WI";
//Maldives
        s_a["MV"] = "Alif|Baa|Dhaalu|Faafu|Gaafu Aliff|Gaafu Daalu|Gnaviyani|Haa Alif|Haa Dhaalu|Kaafu|Laamu|Lhaviyani|Male|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu";
        s_abbr["MV"] = "AL|BA|DH|FA|GA|GA|GN|HA|HA|KA|LA|LH|MLE|ME|NO|RA|SE|SH|TH|VA";
//Mali
        s_a["ML"] = "Bamako|Gao|Kayes|Kidal|Koulikoro|Mopti|Scgou|Sikasso|Tombouctou";
        s_abbr["ML"] = "BK0|GA|KA|KI|KO|MO|SC|SI|TO";
//Malta
        s_a["MT"] = "Attard|Balzan|Birgu|Birkirkara|Biruebbuua|Bormla|Dingli|Fgura|Floriana|Fontana|Gudja|Guira|Guajnsielem|Guarb|Guarguur|Guasri|Guaxaq|Iklin|Isla|Kalkara|Keruem|Kirkop|Lija|Luqa|Marsa|Marsaskala|Marsaxlokk|Mdina|Mellieua|Mosta|Mqabba|Msida|Mtarfa|Munxar|Muarr|Nadur|Naxxar|Paola|Pembroke|Piets|Qala|Qormi|Qrendi|Rabat Guawdex|Rabat Malta|Safi|San Lawrenz|San Pawl il-Bauar|San uiljan|San uwann|Sannat|Santa Luuija|Santa Venera|Siuuiewi|Sliema|Swieqi|Tau Xbiex|Tarxien|Valletta|Xagura|Xewkija|Xguajra|uabbar|uebbuu Guawdex|uebbuu Malta|uejtun|uurrieq|uamrun";
        s_abbr["MT"] = "AT|BA|BI|BI|BI|BO|DI|FG|FL|FO|GU|GU|GU|GU|GU|GU|GU|IK|IS|KA|KE|KI|LI|LU|MA|MA|MA|MD|ME|MO|MQ|MS|MT|MU|MU|NA|NA|PA|PE|PI|QA|QO|QR|RA|RA|SA|SA|SA|SA|SA|SA|SA|SA|SI|SL|SW|TA|TA|VA|XA|XE|XG|UA|UE|UE|UE|UU|UA";
//Marshall Islands
        s_a["MH"] = "Ralik chain|Ratak chain";
        s_abbr["MH"] = "L|T";
//Martinique
        s_a["MQ"] = "";
        s_abbr["MQ"] = "";
//Mauritania
        s_a["MR"] = "Adrar|Assaba|Brakna|Dakhlet Nouadhibou|Gorgol|Guidimaka|Hodh ech Chargui|Hodh el Charbi|Inchiri|Nouakchott|Tagant|Tiris Zemmour|Trarza";
        s_abbr["MR"] = "AD|AS|BR|DA|GO|GU|HO|HO|IN|NKC|TA|TI|TR";
//Mauritius
        s_a["MU"] = "Agalega Islands|Beau Bassin-Rose Hill|Black River|Cargados Carajos Shoals|Curepipe|Flacq|Grand Port|Moka|Pamplemousses|Plaines Wilhems|Port Louis|Port Louis|Quatre Bornes|Riviere du Rempart|Rodrigues Island|Savanne|Vacoas-Phoenix";
        s_abbr["MU"] = "AG|BR|BL|CC|CU|FL|GP|MO|PA|PW|PL|PU|QB|RP|RO|SA|VP";
//Mayotte
        s_a["YT"] = "";
        s_abbr["YT"] = "";
//Mexico
        s_a["MX"] = "Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila|Colima|Distrito Federal|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Mcxico|Michoacan|Morelos|Nayarit|Nuevo Lenn|Oaxaca|Puebla|Querctaro|Quintana Roo|San Luis Potose|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz|Yucatan|Zacatecas";
        s_abbr["MX"] = "AGU|BCN|BCS|CAM|CHP|CHH|COA|COL|DIF|DUR|GUA|GRO|HID|JAL|MEX|MIC|MOR|NAY|NLE|OAX|PUE|QUE|ROO|SLP|SIN|SON|TAB|TAM|TLA|VER|YUC|ZAC";
//Micronesia, Federated States of
        s_a["FM"] = "Chuuk|Kosrae|Pohnpei|Yap";
        s_abbr["FM"] = "TRK|KSA|PNI|YAP";
//Moldova, Republic of
        s_a["MD"] = "Anenii Noi|Basarabeasca|Briceni|Bului|Cahul|Cantemir|Chiuinuu|Cimiulia|Criuleni|Culuraui|Cuuueni|Donduueni|Drochia|Dubusari|Edineu|uolduneuti|utefan Vodu|Floreuti|Fuleuti|Glodeni|Guguuzia, Unitatea teritorialu autonomu|Hinceuti|Ialoveni|Leova|Nisporeni|Ocniua|Orhei|Riucani|Rezina|Singerei|Soroca|Stinga Nistrului, unitatea teritorialu din|Struueni|Taraclia|Teleneuti|Tighina|Ungheni";
        s_abbr["MD"] = "AN|BS|BR|BA|CA|CT|CU|CM|CR|CL|CS|DO|DR|DU|ED|SD|SV|FL|FA|GL|GA|HI|IA|LE|NI|OC|OR|RI|RE|SI|SO|SN|ST|TA|TE|BD|UN";
//Monaco
        s_a["MC"] = "";
        s_abbr["MC"] = "";
//Mongolia
        s_a["MN"] = "Arhangay|Omnogovi|Ovorhangay|Bayan-Olgiy|Bayanhongor|Bulgan|Darhan uul|Dornod|Dornogovi|Dundgovi|Dzavhan|Govi-Altay|Govi-Sumber|Hovsgol|Hentiy|Hovd|Orhon|Suhbaatar|Selenge|Tov|Ulanbaatar|Uvs";
        s_abbr["MN"] = "AR|OM|OV|BA|BA|BU|DA|DO|DO|DU|DZ|GO|GO|HO|HE|HO|OR|SU|SE|TO|UL|UV";
//Montenegro
        s_a["ME"] = "Andrijevica|Bar|Berane|Bijelo Polje|Budva|Cetinje|Danilovgrad|Herceg-Novi|Kolauin|Kotor|Mojkovac|Nikuiu|Plav|Pljevlja|Pluuine|Podgorica|Rouaje|Tivat|Ulcinj|uavnik|uabljak";
        s_abbr["ME"] = "AN|BA|BE|BI|BU|CE|DA|HE|KO|KO|MO|NI|PL|PL|PL|PO|RO|TI|UL|UA|UA";
//Montserrat
        s_a["MS"] = "";
        s_abbr["MS"] = "";
//Morocco
        s_a["MA"] = "Chaouia-Ouardigha|Doukhala-Abda|Fes-Boulemane|Gharb-Chrarda-Beni Hssen|Grand Casablanca|Guelmim-Es Smara|L'Oriental|Laayoune-Boujdour-Sakia el Hamra|Marrakech-Tensift-Al Haouz|Meknes-Tafilalet|Oued ed Dahab-Lagouira|Rabat-Salc-Zemmour-Zaer|Sous-Massa-Draa|Tadla-Azilal|Tanger-Tctouan|Taza-Al Hoceima-Taounate";
        s_abbr["MA"] = "CH|DO|FE|GH|GR|GU|L'|LA|MA|ME|OU|RA|SO|TA|TA|TA";
//Mozambique
        s_a["MZ"] = "Cabo Delgado|Gaza|Inhambane|Manica|Maputo|Maputo (city)|Niassa|Numpula|Sofala|Tete|Zambezia";
        s_abbr["MZ"] = "P|G|I|B|L|MPM|A|N|S|T|Q";
//Myanmar
        s_a["MM"] = "Ayeyarwady|Bago|Chin|Kachin|Kayah|Kayin|Magway|Mandalay|Mon|Rakhine|Sagaing|Shan|Tanintharyi|Yangon";
        s_abbr["MM"] = "AY|BA|CH|KA|KA|KA|MA|MA|MO|RA|SA|SH|TA|YA";
//Namibia
        s_a["NA"] = "Caprivi|Erongo|Hardap|Karas|Khomas|Kunene|Ohangwena|Okavango|Omaheke|Omusati|Oshana|Oshikoto|Otjozondjupa";
        s_abbr["NA"] = "CA|ER|HA|KA|KH|KU|OW|OK|OH|OS|ON|OT|OD";
//Nauru
        s_a["NR"] = "Aiwo|Anabar|Anetan|Anibare|Baiti|Boe|Buada|Denigomodu|Ewa|Ijuw|Meneng|Nibok|Uaboe|Yaren";
        s_abbr["NR"] = "AI|AN|AN|AN|BA|BO|BU|DE|EW|IJ|ME|NI|UA|YA";
//Nepal
        s_a["NP"] = "Madhya Pashchimanchal|Madhyamanchal|Pashchimanchal|Purwanchal|Sudur Pashchimanchal";
        s_abbr["NP"] = "MA|MA|PA|PU|SU";
//Netherlands
        s_a["NL"] = "Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland";
        s_abbr["NL"] = "DR|FL|FR|GE|GR|LI|NB|NH|OV|UT|ZE|ZH";
//New Caledonia
        s_a["NC"] = "";
        s_abbr["NC"] = "";
//New Zealand
        s_a["NZ"] = "Chatham Islands Territory|North Island|South Island";
        s_abbr["NZ"] = "CIT|N|S";
//Nicaragua
        s_a["NI"] = "Atlantico Norte|Atlantico Sur|Boaco|Carazo|Chinandega|Chontales|Estele|Granada|Jinotega|Lenn|Madriz|Managua|Masaya|Matagalpa|Nueva Segovia|Reo San Juan|Rivas";
        s_abbr["NI"] = "AN|AS|BO|CA|CI|CO|ES|GR|JI|LE|MD|MN|MS|MT|NS|SJ|RI";
//Niger
        s_a["NE"] = "Agadez|Diffa|Dosso|Maradi|Niamey|Tahoua|Tillabcri|Zinder";
        s_abbr["NE"] = "AG|DI|DO|MA|NI|TA|TI|ZI";
//Nigeria
        s_a["NG"] = "Abia|Abuja Capital Territory|Adamawa|Akwa Ibom|Anambra|Bauchi|Bayelsa|Benue|Borno|Cross River|Delta|Ebonyi|Edo|Ekiti|Enugu|Gombe|Imo|Jigawa|Kaduna|Kano|Katsina|Kebbi|Kogi|Kwara|Lagos|Nassarawa|Niger|Ogun|Ondo|Osun|Oyo|Plateau|Rivers|Sokoto|Taraba|Yobe|Zamfara";
        s_abbr["NG"] = "AB|FC|AD|AK|AN|BA|BY|BE|BO|CR|DE|EB|ED|EK|EN|GO|IM|JI|KD|KN|KT|KE|KO|KW|LA|NA|NI|OG|ON|OS|OY|PL|RI|SO|TA|YO|ZA";
//Niue
        s_a["NU"] = "";
        s_abbr["NU"] = "";
//Norfolk Island
        s_a["NF"] = "";
        s_abbr["NF"] = "";
//Northern Mariana Islands
        s_a["MP"] = "";
        s_abbr["MP"] = "";
//Norway
        s_a["NO"] = "Akershus|Aust-Agder|Ostfold|Buskerud|Finnmark|Hedmark|Hordaland|Jan Mayen|More og Romsdal|Nord-Trondelag|Nordland|Oppland|Oslo|Rogaland|Sor-Trondelag|Sogn og Fjordane|Svalbard|Telemark|Troms|Vest-Agder|Vestfold";
        s_abbr["NO"] = "AK|AU|OS|BU|FI|HE|HO|JA|MO|NO|NO|OP|OS|RO|SO|SO|SV|TE|TR|VE|VE";
//Oman
        s_a["OM"] = "Ad Dukhiluya|Al Buraymu|Al Buuinah|Al Wusua|Ash Sharquyah|Azu Zuuhirah|Masqau|Musandam|Zuufur";
        s_abbr["OM"] = "DA|BU|BA|WU|SH|ZA|MA|MU|ZU";
//Pakistan
        s_a["PK"] = "Azad Kashmir|Balochistan|Federally Administered Tribal Areas|Islamabad|North-West Frontier|Northern Areas|Punjab|Sindh";
        s_abbr["PK"] = "JK|BA|TA|IS|NW|NA|PB|SD";
//Palau
        s_a["PW"] = "Aimeliik|Airai|Angaur|Hatobohei|Kayangel|Koror|Melekeok|Ngaraard|Ngarchelong|Ngardmau|Ngatpang|Ngchesar|Ngeremlengui|Ngiwal|Peleliu|Sonsorol";
        s_abbr["PW"] = "AI|AI|AN|HA|KA|KO|ME|NG|NG|NG|NG|NG|NG|NG|PE|SO";
//Palestinian Territory, Occupied
        s_a["PS"] = "";
        s_abbr["PS"] = "";
//Panama
        s_a["PA"] = "Bocas del Toro|Chirique|Coclc|Colnn|Daricn|Embera|Herrera|Kuna Yala|Los Santos|Ngobe-Buglc|Panama|Veraguas";
        s_abbr["PA"] = "BO|CH|CO|CO|DA|EM|HE|KY|LO|NB|PA|VE";
//Papua New Guinea
        s_a["PG"] = "Central|Chimbu|East New Britain|East Sepik|Eastern Highlands|Enga|Gulf|Madang|Manus|Milne Bay|Morobe|National Capital District (Port Moresby)|New Ireland|North Solomons|Northern|Sandaun|Southern Highlands|West New Britain|Western|Western Highlands";
        s_abbr["PG"] = "CPM|CPK|EBR|ESW|EHG|EPW|GPK|MPM|MRL|MBA|MPL|NCD|NIK|NSA|NPP|SAN|SHM|WBK|WPD|WHM";
//Paraguay
        s_a["PY"] = "Alto Paraguay|Alto Parana|Amambay|Asuncinn|Deembuco|Boquernn|Caaguazo|Caazapa|Canindeyo|Central|Concepcinn|Cordillera|Guaira|Itapoa|Misiones|Paraguare|Presidente Hayes|San Pedro";
        s_abbr["PY"] = "AL|AL|AM|ASU|DE|BO|CA|CA|CA|CE|CO|CO|GU|IT|MI|PA|PR|SA";
//Peru
        s_a["PE"] = "Amazonas|Ancash|Apuremac|Arequipa|Ayacucho|Cajamarca|Cusco [Cuzco]|El Callao|Huancavelica|Huanuco|Ica|Junen|La Libertad|Lambayeque|Lima|Loreto|Madre de Dios|Moquegua|Municipalidad Metropolitana de Lima|Pasco|Piura|Puno|San Marten|Tacna|Tumbes|Ucayali";
        s_abbr["PE"] = "AMA|ANC|APU|ARE|AYA|CAJ|CUS|CAL|HUV|HUC|ICA|JUN|LAL|LAM|LIM|LOR|MDD|MOQ|LMA|PAS|PIU|PUN|SAM|TAC|TUM|UCA";
//Philippines
        s_a["PH"] = "Autonomous Region in Muslim Mindanao (ARMM)|Bicol (Region V)|Cagayan Valley (Region II)|CALABARZON (Region IV-A)|Caraga (Region XIII)|Central Luzon (Region III)|Central Visayas (Region VII)|Cordillera Administrative Region (CAR)|Davao (Region XI)|Eastern Visayas (Region VIII)|Ilocos (Region I)|MIMAROPA (Region IV-B)|National Capital Region|Northern Mindanao (Region X)|Soccsksargen (Region XII)|Western Visayas (Region VI)|Zamboanga Peninsula (Region IX)";
        s_abbr["PH"] = "AU|BI|CA|CA|CA|CE|CE|CO|DA|EA|IL|MI|0|NO|SO|WE|ZA";
//Pitcairn
        s_a["PN"] = "";
        s_abbr["PN"] = "";
//Poland
        s_a["PL"] = "Dolnouluskie|Kujawsko-pomorskie|Lubelskie|Lubuskie|Mazowieckie|Mauopolskie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Warmiusko-mazurskie|Wielkopolskie|Zachodniopomorskie|undzkie|uluskie|uwiutokrzyskie";
        s_abbr["PL"] = "DS|KP|LU|LB|MZ|MA|OP|PK|PD|PM|WN|WP|ZP|LD|SL|SK";
//Portugal
        s_a["PT"] = "Aveiro|Evora|Beja|Braga|Braganaa|Castelo Branco|Coimbra|Faro|Guarda|Leiria|Lisboa|Portalegre|Porto|Regiao Autnnoma da Madeira|Regiao Autnnoma dos Aaores|Santarcm|Setobal|Viana do Castelo|Vila Real|Viseu";
        s_abbr["PT"] = "AV|EV|BE|BR|BR|CA|CO|FA|GU|LE|LI|PO|PO|RE|RE|SA|SE|VI|VI|VI";
//Puerto Rico
        s_a["PR"] = "";
        s_abbr["PR"] = "";
//Qatar
        s_a["QA"] = "Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jariyan al Batnah|Madinat ash Shamal|Umm Salal";
        s_abbr["QA"] = "DA|GH|JU|KH|WA|RA|JB|MS|US";
//Rcunion
        s_a["RE"] = "";
        s_abbr["RE"] = "";
//Romania
        s_a["RO"] = "Alba|Arad|Argeu|Bacuu|Bihor|Bistriua-Nusuud|Botouani|Brauov|Bruila|Bucureuti|Buzuu|Carau-Severin|Cluj|Constanua|Covasna|Culuraui|Damboviua|Dolj|Galaui|Giurgiu|Gorj|Harghita|Hunedoara|Iaui|Ialomiua|Ilfov|Maramureu|Mehedinui|Mureu|Neamu|Olt|Prahova|Satu Mare|Sibiu|Suceava|Sulaj|Teleorman|Timiu|Tulcea|Vaslui|Valcea|Vrancea";
        s_abbr["RO"] = "AB|AR|AG|BC|BH|BN|BT|BV|BR|B|BZ|CS|CJ|CT|CV|CL|DB|DJ|GL|GR|GJ|HR|HD|IS|IL|IF|MM|MH|MS|NT|OT|PH|SM|SB|SV|SJ|TR|TM|TL|VS|VL|VN";
//Russian Federation
        s_a["RU"] = "Adygeya, Respublika|Altay, Respublika|Altayskiy kray|Amurskaya oblast'|Arkhangel'skaya oblast'|Astrakhanskaya oblast'|Bashkortostan, Respublika|Belgorodskaya oblast'|Bryanskaya oblast'|Buryatiya, Respublika|Chechenskaya Respublika|Chelyabinskaya oblast'|Chukotskiy avtonomnyy okrug|Chuvashskaya Respublika|Dagestan, Respublika|Irkutiskaya oblast'|Ivanovskaya oblast'|Kabardino-Balkarskaya Respublika|Kaliningradskaya oblast'|Kalmykiya, Respublika|Kaluzhskaya oblast'|Kamchatskiy kray|Karachayevo-Cherkesskaya Respublika|Kareliya, Respublika|Kemerovskaya oblast'|Khabarovskiy kray|Khakasiya, Respublika|Khanty-Mansiysky avtonomnyy okrug-Yugra|Kirovskaya oblast'|Komi, Respublika|Kostromskaya oblast'|Krasnodarskiy kray|Krasnoyarskiy kray|Kurganskaya oblast'|Kurskaya oblast'|Leningradskaya oblast'|Lipetskaya oblast'|Magadanskaya oblast'|Mariy El, Respublika|Mordoviya, Respublika|Moskovskaya oblast'|Moskva|Murmanskaya oblast'|Nenetskiy avtonomnyy okrug|Nizhegorodskaya oblast'|Novgorodskaya oblast'|Novosibirskaya oblast'|Omskaya oblast'|Orenburgskaya oblast'|Orlovskaya oblast'|Penzenskaya oblast'|Permskiy kray|Primorskiy kray|Pskovskaya oblast'|Respublika Ingushetiya|Rostovskaya oblast'|Ryazanskaya oblast'|Sakha, Respublika [Yakutiya]|Sakhalinskaya oblast'|Samaraskaya oblast'|Sankt-Peterburg|Saratovskaya oblast'|Severnaya Osetiya-Alaniya, Respublika|Smolenskaya oblast'|Stavropol'skiy kray|Sverdlovskaya oblast'|Tambovskaya oblast'|Tatarstan, Respublika|Tomskaya oblast'|Tul'skaya oblast'|Tverskaya oblast'|Tyumenskaya oblast'|Tyva, Respublika [Tuva]|Udmurtskaya Respublika|Ul'yanovskaya oblast'|Vladimirskaya oblast'|Volgogradskaya oblast'|Vologodskaya oblast'|Voronezhskaya oblast'|Yamalo-Nenetskiy avtonomnyy okrug|Yaroslavskaya oblast'|Yevreyskaya avtonomnaya oblast'|Zabajkal'skij kraj";
        s_abbr["RU"] = "AD|AL|ALT|AMU|ARK|AST|BA|BEL|BRY|BU|CE|CHE|CHU|CU|DA|IRK|IVA|KB|KGD|KL|KLU|KAM|KC|KR|KEM|KHA|KK|KHM|KIR|KO|KOS|KDA|KYA|KGN|KRS|LEN|LIP|MAG|ME|MO|MOS|MOW|MUR|NEN|NIZ|NGR|NVS|OMS|ORE|ORL|PNZ|PER|PRI|PSK|IN|ROS|RYA|SA|SAK|SAM|SPE|SAR|SE|SMO|STA|SVE|TAM|TA|TOM|TUL|TVE|TYU|TY|UD|ULY|VLA|VGG|VLG|VOR|YAN|YAR|YEV|ZAB";
//Rwanda
        s_a["RW"] = "Est|Nord|Ouest|Sud|Ville de Kigali";
        s_abbr["RW"] = "ES|NO|OU|SU|VI";
//Saint Barthclemy
        s_a["BL"] = "";
        s_abbr["BL"] = "";
//Saint Helena, Ascension and Tristan da Cunha
        s_a["SH"] = "";
        s_abbr["SH"] = "";
//Saint Kitts and Nevis
        s_a["KN"] = "Nevis|Saint Kitts";
        s_abbr["KN"] = "N|K";
//Saint Lucia
        s_a["LC"] = "";
        s_abbr["LC"] = "";
//Saint Martin (French part)
        s_a["MF"] = "";
        s_abbr["MF"] = "";
//Saint Pierre and Miquelon
        s_a["PM"] = "";
        s_abbr["PM"] = "";
//Saint Vincent and the Grenadines
        s_a["VC"] = "Charlotte|Grenadines|Saint Andrew|Saint David|Saint George|Saint Patrick";
        s_abbr["VC"] = "CH|GR|SA|SA|SA|SA";
//Samoa
        s_a["WS"] = "A'ana|Aiga-i-le-Tai|Atua|Fa'asaleleaga|Gaga'emauga|Gagaifomauga|Palauli|Satupa'itea|Tuamasaga|Va'a-o-Fonoti|Vaisigano";
        s_abbr["WS"] = "AA|AL|AT|FA|GE|GI|PA|SA|TU|VF|VS";
//San Marino
        s_a["SM"] = "Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Montegiardino|San Marino|Serravalle";
        s_abbr["SM"] = "AC|BO|CH|DO|FA|FI|MO|SA|SE";
//Sao Tome and Principe
        s_a["ST"] = "Prencipe|Sao Tomc";
        s_abbr["ST"] = "P|S";
//Saudi Arabia
        s_a["SA"] = "Al uudud ash Shamuliyah|Al Buhah|Al Jawf|Al Madunah|Al Qauum|Ar Riyuu|Ash Sharquyah|uu'il|Juzan|Makkah|Najrun|Tabuk|Asur";
        s_abbr["SA"] = "AL|AL|AL|AL|AL|AR|AS|UU|JU|MA|NA|TA|AS";
//Senegal
        s_a["SN"] = "Dakar|Diourbel|Fatick|Kaffrine|Kaolack|Kcdougou|Kolda|Louga|Matam|Saint-Louis|Scdhiou|Tambacounda|Thies|Ziguinchor";
        s_abbr["SN"] = "DK|DB|FK|KA|KL|KE|KD|LG|MT|SL|SE|TC|TH|ZG";
//Serbia
        s_a["RS"] = "Beograd|Borski okrug|Braniuevski okrug|Jablaniuki okrug|Kolubarski okrug|Kosovo-Metohija|Mauvanski okrug|Moraviuki okrug|Niuavski okrug|Pirotski okrug|Podunavski okrug|Pomoravski okrug|Puinjski okrug|Rasinski okrug|Rauki okrug|Topliuki okrug|Vojvodina|Zajeuarski okrug|Zlatiborski okrug|uumadijski okrug";
        s_abbr["RS"] = "0|BO|BR|JA|KO|KM|MA|MO|NI|PI|PO|PO|PU|RA|RA|TO|VO|ZA|ZL|UU";
//Seychelles
        s_a["SC"] = "Anse aux Pins|Anse Boileau|Anse Etoile|Anse Louis|Anse Royale|Baie Lazare|Baie Sainte Anne|Beau Vallon|Bel Air|Bel Ombre|Cascade|English River|Glacis|Grand Anse Mahe|Grand Anse Praslin|La Digue|Les Mamelles|Mont Buxton|Mont Fleuri|Plaisance|Pointe Larue|Port Glaud|Roche Caiman|Saint Louis|Takamaka";
        s_abbr["SC"] = "AN|AN|AN|AN|AN|BA|BA|BE|BE|BE|CA|EN|GL|GR|GR|LA|LE|MO|MO|PL|PO|PO|RO|SA|TA";
//Sierra Leone
        s_a["SL"] = "Eastern|Northern|Southern (Sierra Leone)|Western Area (Freetown)";
        s_abbr["SL"] = "E|N|S|W";
//Singapore
        s_a["SG"] = "Central Singapore|North East|North West|South East|South West";
        s_abbr["SG"] = "CE|NO|NO|SO|SO";
//Sint Maarten (Dutch part)
        s_a["SX"] = "";
        s_abbr["SX"] = "";
//Slovakia
        s_a["SK"] = "Banskobystricku kraj|Bratislavsku kraj|Kouicku kraj|Nitriansky kraj|Preuovsku kraj|Trenuiansky kraj|Trnavsku kraj|uilinsku kraj";
        s_abbr["SK"] = "BC|BL|KI|NI|PV|TC|TA|ZI";
//Slovenia
        s_a["SI"] = "Ajdovuuina|Apaue|Beltinci|Benedikt|Bistrica ob Sotli|Bled|Bloke|Bohinj|Borovnica|Bovec|Braslovue|Brda|Brezovica|Breuice|Cankova|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Cerkvenjak|Cirkulane|Destrnik|Divaua|Dobje|Dobrepolje|Dobrna|Dobrova-Polhov Gradec|Dobrovnik/Dobronak|Dol pri Ljubljani|Dolenjske Toplice|Domuale|Dornava|Dravograd|Duplek|Gorenja vas-Poljane|Goriunica|Gorje|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grad|Grosuplje|Hajdina|Hodou/Hodos|Horjul|Houe-Slivnica|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivanuna Gorica|Izola/Isola|Jesenice|Jezersko|Juruinci|Kamnik|Kanal|Kidriuevo|Kobarid|Kobilje|Komen|Komenda|Koper/Capodistria|Kosanjevica na Krki|Kostel|Kozje|Kouevje|Kranj|Kranjska Gora|Kriuevci|Kruko|Kungota|Kuzma|Lauko|Lenart|Lendava/Lendva|Litija|Ljubljana|Ljubno|Ljutomer|Log-Dragomer|Logatec|Lovrenc na Pohorju|Louka dolina|Louki Potok|Lukovica|Luue|Majuperk|Makole|Maribor|Markovci|Medvode|Mengeu|Metlika|Meuica|Miklavu na Dravskem polju|Miren-Kostanjevica|Mirna Peu|Mislinja|Mokronog-Trebelno|Moravske Toplice|Moravue|Mozirje|Murska Sobota|Muta|Naklo|Nazarje|Nova Gorica|Novo mesto|Odranci|Oplotnica|Ormou|Osilnica|Pesnica|Piran/Pirano|Pivka|Podlehnik|Podvelka|Poduetrtek|Poljuane|Polzela|Postojna|Prebold|Preddvor|Prevalje|Ptuj|Puconci|Radenci|Radeue|Radlje ob Dravi|Radovljica|Ravne na Koroukem|Razkriuje|Raue-Fram|Renue-Vogrsko|Reuica ob Savinji|Ribnica|Ribnica na Pohorju|Rogatec|Rogauka Slatina|Rogauovci|Ruue|Selnica ob Dravi|Semiu|Sevnica|Seuana|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Sodrauica|Soluava|Srediuue ob Dravi|Starue|Straua|Sveta Ana|Sveta Andrau v Slovenskih Goricah|Sveta Trojica v Slovenskih Goricah|Sveti Jurij|Sveti Jurij v Slovenskih Goricah|Sveti Tomau|Tabor|Tiuina|Tolmin|Trbovlje|Trebnje|Trnovska vas|Trzin|Truiu|Turniuue|Velenje|Velika Polana|Velike Lauue|Veruej|Videm|Vipava|Vitanje|Vodice|Vojnik|Vransko|Vrhnika|Vuzenica|Zagorje ob Savi|Zavru|Zreue|ualovci|uempeter-Vrtojba|uentilj|uentjernej|uentjur|uentrupert|uenuur|ukocjan|ukofja Loka|ukofljica|umarje pri Jeluah|umarjeske Topliue|umartno ob Paki|umartno pri Litiji|uoutanj|utore|ualec|uelezniki|uetale|uiri|uirovnica|uuuemberk|urenuovci|urna na Koroukem|urnomelj";
        s_abbr["SI"] = "AJ|AP|BE|BE|BI|BL|BL|BO|BO|BO|BR|BR|BR|BR|CA|CE|CE|CE|CE|CE|CI|DE|DI|DO|DO|DO|DO|DO|DO|DO|DO|DO|DR|DU|GO|GO|GO|GO|GO|GO|GR|GR|HA|HO|HO|HO|HR|HR|ID|IG|IL|IV|IZ|JE|JE|JU|KA|KA|KI|KO|KO|KO|KO|KO|KO|KO|KO|KO|KR|KR|KR|KR|KU|KU|LA|LE|LE|LI|LJ|LJ|LJ|LO|LO|LO|LO|LO|LU|LU|MA|MA|MA|MA|ME|ME|ME|ME|MI|MI|MI|MI|MO|MO|MO|MO|MU|MU|NA|NA|NO|NO|OD|OP|OR|OS|PE|PI|PI|PO|PO|PO|PO|PO|PO|PR|PR|PR|PT|PU|RA|RA|RA|RA|RA|RA|RA|RE|RE|RI|RI|RO|RO|RO|RU|SE|SE|SE|SE|SL|SL|SL|SO|SO|SR|ST|ST|SV|SV|SV|SV|SV|SV|TA|TI|TO|TR|TR|TR|TR|TR|TU|VE|VE|VE|VE|VI|VI|VI|VO|VO|VR|VR|VU|ZA|ZA|ZR|UA|UE|UE|UE|UE|UE|UE|UK|UK|UK|UM|UM|UM|UM|UO|UT|UA|UE|UE|UI|UI|UU|UR|UR|UR";
//Solomon Islands
        s_a["SB"] = "Capital Territory (Honiara)|Central|Choiseul|Guadalcanal|Isabel|Makira|Malaita|Rennell and Bellona|Temotu|Western";
        s_abbr["SB"] = "CT|CE|CH|GU|IS|MK|ML|RB|TE|WE";
//Somalia
        s_a["SO"] = "Awdal|Bakool|Banaadir|Bari|Bay|Galguduud|Gedo|Hiirsan|Jubbada Dhexe|Jubbada Hoose|Mudug|Nugaal|Saneag|Shabeellaha Dhexe|Shabeellaha Hoose|Sool|Togdheer|Woqooyi Galbeed";
        s_abbr["SO"] = "AW|BK|BN|BR|BY|GA|GE|HI|JD|JH|MU|NU|SA|SD|SH|SO|TO|WO";
//South Africa
        s_a["ZA"] = "Eastern Cape|Free State|Gauteng|Kwazulu-Natal|Limpopo|Mpumalanga|North-West (South Africa)|Northern Cape|Western Cape";
        s_abbr["ZA"] = "EC|FS|GT|NL|LP|MP|NW|NC|WC";
//South Georgia and the South Sandwich Islands
        s_a["GS"] = "";
        s_abbr["GS"] = "";
//South Sudan
        s_a["SS"] = "";
        s_abbr["SS"] = "";
//Spain
        s_a["ES"] = "Andalucea|Aragnn|Asturias, Principado de|Canarias|Cantabria|Castilla y Lenn|Castilla-La Mancha|Catalunya|Ceuta|Extremadura|Galicia|Illes Balears|La Rioja|Madrid, Comunidad de|Melilla|Murcia, Reginn de|Navarra, Comunidad Foral de / Nafarroako Foru Komunitatea|Paes Vasco / Euskal Herria|Valenciana, Comunidad / Valenciana, Comunitat ";
        s_abbr["ES"] = "AN|AR|AS|CN|CB|CL|CM|CT|CE|EX|GA|IB|RI|MD|ML|MC|NC|PV|VC";
//Sri Lanka
        s_a["LK"] = "Basnuhira pauuta|Dakuuu pauuta|Madhyama pauuta|Naugunahira pauuta|Sabaragamuva pauuta|Uturu pauuta|Uturumauda pauuta|Vayamba pauuta|uva pauuta";
        s_abbr["LK"] = "BA|DA|MA|NA|SA|UT|UT|VA|UV";
//Sudan
        s_a["SD"] = "Auulu an Nul|Al Baur al Aumar|Al Buuayrut|Al Jazurah|Al Kharuum|Al Qauurif|Al Waudah|An Nul|An Nul al Abyau|An Nul al Azraq|Ash Shamuluyah|Baur al Jabal|Gharb al Istiwu'uyah|Gharb Baur al Ghazul|Gharb Durfur|Janub Durfur|Janub Kurdufun|Junqalu|Kassalu|Shamul Baur al Ghazul|Shamul Durfur|Shamul Kurdufun|Sharq al Istiwu'uyah|Sinnur|Wurub";
        s_abbr["SD"] = "AU|AL|AL|AL|AL|AL|AL|AN|AN|AN|AS|BA|GH|GH|GH|JA|JA|JU|KA|SH|SH|SH|SH|SI|WU";
//Suriname
        s_a["SR"] = "Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Paramaribo|Saramacca|Sipaliwini|Wanica";
        s_abbr["SR"] = "BR|CM|CR|MA|NI|PR|PM|SA|SI|WA";
//Svalbard and Jan Mayen
        s_a["SJ"] = "";
        s_abbr["SJ"] = "";
//Swaziland
        s_a["SZ"] = "Hhohho|Lubombo|Manzini|Shiselweni";
        s_abbr["SZ"] = "HH|LU|MA|SH";
//Sweden
        s_a["SE"] = "Orebro lan|Ostergotlands lan|Blekinge lan|Dalarnas lan|Gavleborgs lan|Gotlands lan|Hallands lan|Jamtlande lan|Jonkopings lan|Kalmar lan|Kronobergs lan|Norrbottens lan|Sodermanlands lan|Skane lan|Stockholms lan|Uppsala lan|Varmlands lan|Vasterbottens lan|Vasternorrlands lan|Vastmanlands lan|Vastra Gotalands lan";
        s_abbr["SE"] = "T|E|K|W|X|I|N|Z|F|H|G|BD|D|M|AB|C|S|AC|Y|U|O";
//Switzerland
        s_a["CH"] = "Aargau|Appenzell Ausserrhoden|Appenzell Innerrhoden|Basel-Landschaft|Basel-Stadt|Bern|Fribourg|Geneve|Glarus|Graubunden|Jura|Luzern|Neuchatel|Nidwalden|Obwalden|Sankt Gallen|Schaffhausen|Schwyz|Solothurn|Thurgau|Ticino|Uri|Valais|Vaud|Zurich|Zug";
        s_abbr["CH"] = "AG|AR|AI|BL|BS|BE|FR|GE|GL|GR|JU|LU|NE|NW|OW|SG|SH|SZ|SO|TG|TI|UR|VS|VD|ZH|ZG";
//Syrian Arab Republic
        s_a["SY"] = "Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda'|Dar'a|Dayr az Zawr|Dimashq|Halab|Hamah|Homs|Idlib|Rif Dimashq|Tartus";
        s_abbr["SY"] = "HA|LA|QU|RA|SU|DR|DY|DI|HL|HM|HI|ID|RD|TA";
//Taiwan, Province of China
        s_a["TW"] = "Changhua|Chiay City|Chiayi|Hsinchu|Hsinchui City|Hualien|Ilan|Kaohsiung|Kaohsiung City|Keelung City|Miaoli|Nantou|Penghu|Pingtung|Taichung|Taichung City|Tainan|Tainan City|Taipei|Taipei City|Taitung|Taoyuan|Yunlin";
        s_abbr["TW"] = "CHA|CYI|CYQ|HSQ|HSZ|HUA|ILA|KHQ|KHH|KEE|MIA|NAN|PEN|PIF|TXQ|TXG|TNQ|TNN|TPQ|TPE|TTT|TAO|YUN";
//Tajikistan
        s_a["TJ"] = "Gorno-Badakhshan|Khatlon|Sughd";
        s_abbr["TJ"] = "GB|KT|SU";
//Tanzania, United Republic of
        s_a["TZ"] = "Arusha|Dar-es-Salaam|Dodoma|Iringa|Kagera|Kaskazini Pemba|Kaskazini Unguja|Kigoma|Kilimanjaro|Kusini Pemba|Kusini Unguja|Lindi|Manyara|Mara|Mbeya|Mjini Magharibi|Morogoro|Mtwara|Mwanza|Pwani|Rukwa|Ruvuma|Shinyanga|Singida|Tabora|Tanga";
        s_abbr["TZ"] = "AR|DA|DO|IR|KA|KA|KA|KI|KI|KU|KU|LI|MA|MA|MB|MJ|MO|MT|MW|PW|RU|RU|SH|SI|TA|TA";
//Thailand
        s_a["TH"] = "Amnat Charoen|Ang Thong|Buri Ram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng Phet|Kanchanaburi|Khon Kaen|Krabi|Krung Thep Maha Nakhon Bangkok|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon Pathom|Nakhon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lam Phu|Nong Khai|Nonthaburi|Pathum Thani|Pattani|Phangnga|Phatthalung|Phatthaya|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri Khan|Ranong|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Saraburi|Satun|Si Sa Ket|Sing Buri|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon";
        s_abbr["TH"] = "AM|AN|BU|CH|CH|CH|CH|CH|CH|CH|CH|KA|KA|KA|KH|KR|KR|LA|LA|LO|LO|MA|MA|MU|NA|NA|NA|NA|NA|NA|NA|NA|NO|NO|NO|PA|PA|PH|PH|S|PH|PH|PH|PH|PH|PH|PH|PH|PR|PR|RA|RA|RA|RO|SA|SA|SA|SA|SA|SA|SA|SI|SI|SO|SU|SU|SU|SU|TA|TR|TR|UB|UD|UT|UT|YA|YA";
//Timor-Leste
        s_a["TL"] = "Aileu|Ainaro|Baucau|Bobonaro|Cova Lima|Dili|Ermera|Lautem|Liquiaa|Manatuto|Manufahi|Oecussi|Viqueque";
        s_abbr["TL"] = "AL|AN|BA|BO|CO|DI|ER|LA|LI|MT|MF|OE|VI";
//Togo
        s_a["TG"] = "Rcgion de la Kara|Rcgion des Plateaux|Rcgion des Savannes|Rcgion du Centre|Rcgion Maritime";
        s_abbr["TG"] = "K|P|S|C|M";
//Tokelau
        s_a["TK"] = "";
        s_abbr["TK"] = "";
//Tonga
        s_a["TO"] = "'Eua|Ha'apai|Niuas|Tongatapu|Vava'u";
        s_abbr["TO"] = "'E|HA|NI|TO|VA";
//Trinidad and Tobago
        s_a["TT"] = "Arima|Chaguanas|Couva-Tabaquite-Talparo|Diego Martin|Eastern Tobago|Penal-Debe|Point Fortin|Port of Spain|Princes Town|Rio Claro-Mayaro|San Fernando|San Juan-Laventille|Sangre Grande|Siparia|Tunapuna-Piarco|Western Tobago";
        s_abbr["TT"] = "ARI|CHA|CTT|DMN|ETO|PED|PTF|POS|PRT|RCM|SFO|SJL|SGE|SIP|TUP|WTO";
//Tunisia
        s_a["TN"] = "Bcja|Ben Arous|Bizerte|Gabes|Gafsa|Jendouba|Kairouan|Kasserine|Kebili|L'Ariana|La Manouba|Le Kef|Mahdia|Medenine|Monastir|Nabeul|Sfax|Sidi Bouzid|Siliana|Sousse|Tataouine|Tozeur|Tunis|Zaghouan";
        s_abbr["TN"] = "BC|BE|BI|GA|GA|JE|KA|KA|KE|L'|LA|LE|MA|ME|MO|NA|SF|SI|SI|SO|TA|TO|TU|ZA";
//Turkey
        s_a["TR"] = "Adana|Aduyaman|Afyon|Aksaray|Amasya|Ankara|Antalya|Ardahan|Artvin|Aydun|Auru|Eanakkale|Eankuru|Eorum|Balukesir|Bartun|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Duzce|Denizli|Diyarbakur|Edirne|Elazuu|Erzincan|Erzurum|Eskiuehir|Gaziantep|Gumuuhane|Giresun|Hakkari|Hatay|Isparta|Iudur|Kahramanmarau|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kutahya|Kilis|Kocaeli|Konya|Kurklareli|Kuruehir|Kurukkale|Malatya|Manisa|Mardin|Muu|Muula|Nevuehir|Niude|Ordu|Osmaniye|Rize|Sakarya|Samsun|Siirt|Sinop|Sivas|Tekirdau|Tokat|Trabzon|Tunceli|Uuak|Van|Yalova|Yozgat|Zonguldak|uanluurfa|uurnak|uael|ustanbul|uzmir";
        s_abbr["TR"] = "AD|AD|AF|AK|AM|AN|AN|AR|AR|AY|AU|EA|EA|EO|BA|BA|BA|BA|BI|BI|BI|BO|BU|BU|DU|DE|DI|ED|EL|ER|ER|ES|GA|GU|GI|HA|HA|IS|IU|KA|KA|KA|KA|KA|KA|KU|KI|KO|KO|KU|KU|KU|MA|MA|MA|MU|MU|NE|NI|OR|OS|RI|SA|SA|SI|SI|SI|TE|TO|TR|TU|UU|VA|YA|YO|ZO|UA|UU|UA|US|UZ";
//Turkmenistan
        s_a["TM"] = "Ahal|Augabat|Balkan|Dauoguz|Lebap|Mary";
        s_abbr["TM"] = "A|S|B|D|L|M";
//Turks and Caicos Islands
        s_a["TC"] = "";
        s_abbr["TC"] = "";
//Tuvalu
        s_a["TV"] = "Funafuti|Nanumanga|Nanumea|Niutao|Nui|Nukufetau|Nukulaelae|Vaitupu";
        s_abbr["TV"] = "FUN|NMG|NMA|NIT|NIU|NKF|NKL|VAI";
//Uganda
        s_a["UG"] = "Central|Eastern|Northern|Western";
        s_abbr["UG"] = "C|E|N|W";
//Ukraine
        s_a["UA"] = "Cherkas'ka Oblast'|Chernihivs'ka Oblast'|Chernivets'ka Oblast'|Dnipropetrovs'ka Oblast'|Donets'ka Oblast'|Ivano-Frankivs'ka Oblast'|Kharkivs'ka Oblast'|Khersons'ka Oblast'|Khmel'nyts'ka Oblast'|Kirovohrads'ka Oblast'|Kyivs'ka mis'ka rada|Kyivs'ka Oblast'|L'vivs'ka Oblast'|Luhans'ka Oblast'|Mykolaivs'ka Oblast'|Odes'ka Oblast'|Poltavs'ka Oblast'|Respublika Krym|Rivnens'ka Oblast'|Sevastopol|Sums 'ka Oblast'|Ternopil's'ka Oblast'|Vinnyts'ka Oblast'|Volyns'ka Oblast'|Zakarpats'ka Oblast'|Zaporiz'ka Oblast'|Zhytomyrs'ka Oblast'";
        s_abbr["UA"] = "CH|CH|CH|DN|DO|IV|KH|KH|KH|KI|KY|KY|L'|LU|MY|OD|PO|RE|RI|SE|SU|TE|VI|VO|ZA|ZA|ZH";
//United Arab Emirates
        s_a["AE"] = "'Ajmun|Abu uaby [Abu Dhabi]|Al Fujayrah|Ash Shuriqah|Dubayy|Raus al Khaymah|Umm al Qaywayn";
        s_abbr["AE"] = "AJ|AZ|FU|SH|DU|RK|UQ";
//United Kingdom
        s_a["GB"] = "Aberdeen City|Aberdeenshire|Angus|Antrim|Ards|Argyll and Bute|Armagh|Ballymena|Ballymoney|Banbridge|Barking and Dagenham|Barnet|Barnsley|Bath and North East Somerset|Bedford|Belfast|Bexley|Birmingham|Blackburn with Darwen|Blackpool|Blaenau Gwent|Bolton|Bournemouth|Bracknell Forest|Bradford|Brent|Bridgend;Pen-y-bont ar Ogwr|Brighton and Hove|Bristol, City of|Bromley|Buckinghamshire|Bury|Caerphilly;Caerffili|Calderdale|Cambridgeshire|Camden|Cardiff;Caerdydd|Carmarthenshire;Sir Gaerfyrddin|Carrickfergus|Castlereagh|Central Bedfordshire|Ceredigion;Sir Ceredigion|Cheshire East|Cheshire West and Chester|Clackmannanshire|Coleraine|Conwy|Cookstown|Cornwall|Coventry|Craigavon|Croydon|Cumbria|Darlington|Denbighshire;Sir Ddinbych|Derby|Derbyshire|Derry|Devon|Doncaster|Dorset|Down|Dudley|Dumfries and Galloway|Dundee City|Dungannon|Durham|Ealing|East Ayrshire|East Dunbartonshire|East Lothian|East Renfrewshire|East Riding of Yorkshire|East Sussex|Edinburgh, City of|Eilean Siar|Enfield|England|England and Wales|Essex|Falkirk|Fermanagh|Fife|Flintshire;Sir y Fflint|Gateshead|Glasgow City|Gloucestershire|Great Britain|Greenwich|Gwynedd|Hackney|Halton|Hammersmith and Fulham|Hampshire|Haringey|Harrow|Hartlepool|Havering|Herefordshire|Hertfordshire|Highland|Hillingdon|Hounslow|Inverclyde|Isle of Anglesey;Sir Ynys Mon|Isle of Wight|Islington|Kensington and Chelsea|Kent|Kingston upon Hull|Kingston upon Thames|Kirklees|Knowsley|Lambeth|Lancashire|Larne|Leeds|Leicester|Leicestershire|Lewisham|Limavady|Lincolnshire|Lisburn|Liverpool|London, City of|Luton|Magherafelt|Manchester|Medway|Merthyr Tydfil;Merthyr Tudful|Merton|Middlesbrough|Midlothian|Milton Keynes|Monmouthshire;Sir Fynwy|Moray|Moyle|Neath Port Talbot;Castell-nedd Port Talbot|Newcastle upon Tyne|Newham|Newport;Casnewydd|Newry and Mourne|Newtownabbey|Norfolk|North Ayrshire|North Down|North East Lincolnshire|North Lanarkshire|North Lincolnshire|North Somerset|North Tyneside|North Yorkshire|Northamptonshire|Northern Ireland|Northumberland|Nottingham|Nottinghamshire|Oldham|Omagh|Orkney Islands|Oxfordshire|Pembrokeshire;Sir Benfro|Perth and Kinross|Peterborough|Plymouth|Poole|Portsmouth|Powys|Reading|Redbridge|Redcar and Cleveland|Renfrewshire|Rhondda, Cynon, Taff;Rhondda, Cynon,Taf|Richmond upon Thames|Rochdale|Rotherham|Rutland|Salford|Sandwell|Scotland|Scottish Borders, The|Sefton|Sheffield|Shetland Islands|Shropshire|Slough|Solihull|Somerset|South Ayrshire|South Gloucestershire|South Lanarkshire|South Tyneside|Southampton|Southend-on-Sea|Southwark|St. Helens|Staffordshire|Stirling|Stockport|Stockton-on-Tees|Stoke-on-Trent|Strabane|Suffolk|Sunderland|Surrey|Sutton|Swansea;Abertawe|Swindon|Tameside|Telford and Wrekin|Thurrock|Torbay|Torfaen;Tor-faen|Tower Hamlets|Trafford|United Kingdom|Vale of Glamorgan, The;Bro Morgannwg|Wakefield|Wales|Walsall|Waltham Forest|Wandsworth|Warrington|Warwickshire|West Berkshire|West Dunbartonshire|West Lothian|West Sussex|Westminster|Wigan|Windsor and Maidenhead|Wirral|Wokingham|Wolverhampton|Worcestershire|Wrexham|York";
        s_abbr["GB"] = "ABE|ABD|ANS|ANT|ARD|AGB|ARM|BLA|BLY|BNB|BDG|BNE|BNS|BAS|BDF|BFS|BEX|BIR|BBD|BPL|BGW|BOL|BMH|BRC|BRD|BEN|BGE|BNH|BST|BRY|BKM|BUR|CAY|CLD|CAM|CMD|CRF|CMN|CKF|CSR|CBF|CGN|CHE|CHW|CLK|CLR|CWY|CKT|CON|COV|CGV|CRY|CMA|DAL|DEN|DER|DBY|DRY|DEV|DNC|DOR|DOW|DUD|DGY|DND|DGN|DUR|EAL|EAY|EDU|ELN|ERW|ERY|ESX|EDH|ELS|ENF|ENG|EAW|ESS|FAL|FER|FIF|FLN|GAT|GLG|GLS|GBN|GRE|GWN|HCK|HAL|HMF|HAM|HRY|HRW|HPL|HAV|HEF|HRT|HLD|HIL|HNS|IVC|AGY|IOW|ISL|KEC|KEN|KHL|KTT|KIR|KWL|LBH|LAN|LRN|LDS|LCE|LEC|LEW|LMV|LIN|LSB|LIV|LND|LUT|MFT|MAN|MDW|MTY|MRT|MDB|MLN|MIK|MON|MRY|MYL|NTL|NET|NWM|NWP|NYM|NTA|NFK|NAY|NDN|NEL|NLK|NLN|NSM|NTY|NYK|NTH|NIR|NBL|NGM|NTT|OLD|OMH|ORK|OXF|PEM|PKN|PTE|PLY|POL|POR|POW|RDG|RDB|RCC|RFW|RCT|RIC|RCH|ROT|RUT|SLF|SAW|SCT|SCB|SFT|SHF|ZET|SHR|SLG|SOL|SOM|SAY|SGC|SLK|STY|STH|SOS|SWK|SHN|STS|STG|SKP|STT|STE|STB|SFK|SND|SRY|STN|SWA|SWD|TAM|TFW|THR|TOB|TOF|TWH|TRF|UKM|VGL|WKF|WLS|WLL|WFT|WND|WRT|WAR|WBK|WDU|WLN|WSX|WSM|WGN|WNM|WRL|WOK|WLV|WOR|WRX|YOR";
//United States
        s_a["US"] = "Alabama|Alaska|American Samoa|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Guam|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Northern Mariana Islands|Ohio|Oklahoma|Oregon|Pennsylvania|Puerto Rico|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|United States Minor Outlying Islands|Utah|Vermont|Virgin Islands|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
        s_abbr["US"] = "AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PA|PR|RI|SC|SD|TN|TX|UM|UT|VT|VI|VA|WA|WV|WI|WY";
//United States Minor Outlying Islands
        s_a["UM"] = "Baker Island|Howland Island|Jarvis Island|Johnston Atoll|Kingman Reef|Midway Islands|Navassa Island|Palmyra Atoll|Wake Island";
        s_abbr["UM"] = "BA|HO|JA|JO|KI|MI|NA|PA|WA";
//Uruguay
        s_a["UY"] = "Artigas|Canelones|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Maldonado|Montevideo|Paysando|Reo Negro|Rivera|Rocha|Salto|San Josc|Soriano|Tacuarembn|Treinta y Tres";
        s_abbr["UY"] = "AR|CA|CL|CO|DU|FS|FD|LA|MA|MO|PA|RN|RV|RO|SA|SJ|SO|TA|TT";
//Uzbekistan
        s_a["UZ"] = "Andijon|Buxoro|Farg'ona|Jizzax|Namangan|Navoiy|Qashqadaryo|Qoraqalpog'iston Respublikasi|Samarqand|Sirdaryo|Surxondaryo|Toshkent|Toshkent|Xorazm";
        s_abbr["UZ"] = "AN|BU|FA|JI|NG|NW|QA|QR|SA|SI|SU|TK|TO|XO";
//Vanuatu
        s_a["VU"] = "Malampa|Pcnama|Sanma|Shcfa|Tafca|Torba";
        s_abbr["VU"] = "MAP|PAM|SAM|SEE|TAE|TOB";
//Venezuela, Bolivarian Republic of
        s_a["VE"] = "Amazonas|Anzoategui|Apure|Aragua|Barinas|Bolevar|Carabobo|Cojedes|Delta Amacuro|Dependencias Federales|Distrito Federal|Falcnn|Guarico|Lara|Mcrida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Tachira|Trujillo|Vargas|Yaracuy|Zulia";
        s_abbr["VE"] = "Z|B|C|D|E|F|G|H|Y|W|A|I|J|K|L|M|N|O|P|R|S|T|X|U|V";
//Viet Nam
        s_a["VN"] = "An Giang|Bs Rua - Vung Tsu|Benh Duung|Benh Phuuc|Benh Thuun|Benh uunh|Buc Lieu|Buc Giang|Buc Kun|Buc Ninh|Bun Tre|Cao Bung|Cs Mau|Cun Thu|Gia Lai|Hs Giang|Hs Nam|Hs Nui, thu uo|Hs Tay|Hs Tunh|Hui Duong|Hui Phing, thsnh phu|Huu Giang|Hu Che Minh, thsnh phu [Ssi Gin]|Hos Benh|Hung Yen|Khanh Hia|Kien Giang|Kon Tum|Lai Chau|Lso Cai|Lam uung|Lung Sun|Long An|Nam uunh|Nghu An|Ninh Benh|Ninh Thuun|Pho Thu|Pho Yen|Quung Benh|Quung Nam|Quung Ngai|Quung Ninh|Quung Tru|Snc Trung|Sun La|Tay Ninh|Thanh Hna|Thai Benh|Thai Nguyen|Thua Thien-Huu|Tiun Giang|Trs Vinh|Tuyen Quang|Vunh Long|Vunh Phoc|Yen Bai|us Nung, thsnh phu|uuc Luk|uuk Nong|uung Nai|uung Thap|uiun Bien";
        s_abbr["VN"] = "AN|BS|BE|BE|BE|BE|BU|BU|BU|BU|BU|CA|CS|CU|GI|HS|HS|HS|HS|HS|HU|HU|HU|HU|HO|HU|KH|KI|KO|LA|LS|LA|LU|LO|NA|NG|NI|NI|PH|PH|QU|QU|QU|QU|QU|SN|SU|TA|TH|TH|TH|TH|TI|TR|TU|VU|VU|YE|US|UU|UU|UU|UU|UI";
//Virgin Islands, British
        s_a["VG"] = "";
        s_abbr["VG"] = "";
//Virgin Islands, U.S.
        s_a["VI"] = "";
        s_abbr["VI"] = "";
//Wallis and Futuna
        s_a["WF"] = "";
        s_abbr["WF"] = "";
//Western Sahara
        s_a["EH"] = "";
        s_abbr["EH"] = "";
//Yemen
        s_a["YE"] = "'Adan|'Amrun|Abyun|Adu Duuliu|Al uudaydah|Al Bayuu'|Al Jawf|Al Mauwut|Al Mahrah|uauramawt|uajjah|Dhamur|Ibb|Lauij|Ma'rib|Raymah|Shabwah|Tu'izz|ua'dah|uan'u'";
        s_abbr["YE"] = "AD|AM|AB|DA|MU|BA|JA|MW|MR|HD|HJ|DH|IB|LA|MA|RA|SH|TA|SD|SN";
//Zambia
        s_a["ZM"] = "Central|Copperbelt|Eastern|Luapula|Lusaka|North-Western|Northern|Southern (Zambia)|Western";
        s_abbr["ZM"] = "CE|CO|EA|LU|LU|NO|NO|SO|WE";
//Zimbabwe
        s_a["ZW"] = "Bulawayo|Harare|Manicaland|Mashonaland Central|Mashonaland East|Mashonaland West|Masvingo|Matabeleland North|Matabeleland South|Midlands";
        s_abbr["ZW"] = "BU|HA|MA|MC|ME|MW|MV|MN|MS|MI";




function print_country(country_id){
    var option_str = document.getElementById(country_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select Country', '');
    option_str.selectedIndex = 0;
    for (var i = 0; i < country_arr.length; i++) {
        option_str.options[option_str.length] = new Option(country_arr[i], country_abbr_arr[i]);
    }
}

function print_state(state_id, country_abbr_val){
    var option_str = document.getElementById(state_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select State', '');
    option_str.selectedIndex = 0;
    if (s_abbr[country_abbr_val]) {
        var state_abbr_arr = s_abbr[country_abbr_val].split("|");
        var state_arr = s_a[country_abbr_val].split("|");
        for (var i = 0; i < state_arr.length; i++) {
            option_str.options[option_str.length] = new Option(state_arr[i], state_abbr_arr[i]);
        }
    }
}
