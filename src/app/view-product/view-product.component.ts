import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  // product:any=[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},{"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}},{"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3.9,"count":70}},{"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},{"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}},{"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":{"rate":3.3,"count":203}},{"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":{"rate":2.9,"count":470}},{"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}},{"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":{"rate":4.8,"count":400}},{"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","category":"electronics","image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg","rating":{"rate":2.9,"count":250}},{"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","category":"electronics","image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg","rating":{"rate":2.2,"count":140}},{"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","category":"women's clothing","image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg","rating":{"rate":2.6,"count":235}},{"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women's clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg","rating":{"rate":2.9,"count":340}},{"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}},{"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}},{"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women's clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg","rating":{"rate":4.5,"count":146}},{"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women's clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg","rating":{"rate":3.6,"count":145}}]
data:any=[
    {"status":"ok","totalResults":38,"articles":[{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Portugal vs Uruguay FIFA World Cup 2022 Live Updates: Gomez denied by post, POR 1-0 URU after 70 mins at Lusail Stadium - The Indian Express","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMirQFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvc3BvcnRzL2Zvb3RiYWxsL2ZpZmEtd29ybGQtY3VwLTIwMjItbGl2ZS11cGRhdGVzLWNhbWVyb29uLXZzLXNlcmJpYS1zb3V0aC1rb3JlYS12cy1naGFuYS1icmF6aWwtdnMtc3dpdHplcmxhbmQtcG9ydHVnYWwtdnMtdXJ1Z3VheS04Mjk0MDI2L9IBAA?oc=5","urlToImage":null,"publishedAt":"2022-11-28T20:27:01Z","content":null},{"source":{"id":null,"name":"ZDNet"},"author":"Maria Diaz","title":"Where to find the elusive Nintendo Switch Lite on Cyber Monday 2022 - ZDNet","description":"Nintendo is notorious for being ungenerous with gaming console deals and it's no surprise: The Switch Lite console is running out everywhere you look. We've gathered the best places to find a Nintendo Switch Lite this Cyber Monday 2022.","url":"https://www.zdnet.com/home-and-office/home-entertainment/find-the-elusive-nintendo-switch-lite-on-cyber-monday-2022/","urlToImage":"https://www.zdnet.com/a/img/resize/7c0c8ea4c556bedf3484484bcff0c66d5c4b1b84/2022/11/28/7bb179f5-9da3-44ae-82fb-05b509943ae3/nintendo.jpg?auto=webp&fit=crop&height=675&width=1200","publishedAt":"2022-11-28T19:19:20Z","content":"ZDNET's recommendations are based on many hours of testing, research, and comparison shopping. We gather data from the best available sources, including vendor and retailer listings as well as other … [+1152 chars]"},{"source":{"id":null,"name":"Investing.com"},"author":"Reuters","title":"Apple, energy shares drag Wall St lower amid China COVID protests By Reuters - Investing.com","description":"Apple, energy shares drag Wall St lower amid China COVID protests","url":"https://www.investing.com/news/stock-market-news/wall-st-futures-slip-on-china-covid-woes-apple-falls-2952772","urlToImage":"https://i-invdn-com.investing.com/news/LYNXMPEA6G0NG_L.jpg","publishedAt":"2022-11-28T18:16:00Z","content":"By Ankika Biswas and Shreyashi Sanyal\r\n(Reuters) -Wall Street's main indexes fell on Monday as protests in major Chinese cities against strict COVID-19 policies sparked concerns over economic growth … [+3134 chars]"},{"source":{"id":null,"name":"Abplive.com"},"author":"Radifah Kabir","title":"What's Common Between Human And Octopus Brains? Scientists Explore Reasons For Similarities - ABP Live","description":"Special RNAs called miRNAs are found in the neural tissues of octopuses. This shows that developments that occurred in vertebrates also took place in octopuses.","url":"https://news.abplive.com/science/what-s-common-between-human-and-octopus-brains-scientists-explore-reasons-for-similarities-1566158","urlToImage":"https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/28/e10816bebbe1bbe73bfca94110f44d871669654227550324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628","publishedAt":"2022-11-28T18:03:14Z","content":"Did you know that octopus and human brains have certain things in common? Cephalopods such as octopuses, squids and cuttlefish have complex nervous systems, and are highly intelligent animals. A team… [+5031 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Aryan Prakash","title":"Aaftab to undergo polygraph tomorrow, says Tihar jail administration - Hindustan Times","description":"Shraddha murder: Aaftab Poonawala is currently in 13-day judicial custody as ordered by a Delhi court last Saturday. He is currently lodged in jail number four at Tihar prison, monitored round the clock using CCTV cameras on apprehensions that he could harm h…","url":"https://www.hindustantimes.com/cities/delhi-news/shraddha-walkar-murder-aaftab-poonawala-to-undergo-polygraph-tomorrow-says-tihar-jail-administration-101669650821013.html","urlToImage":"https://images.hindustantimes.com/img/2022/11/28/1600x900/Aaftab_Poonawala_1669653787197_1669653787419_1669653787419.jpg","publishedAt":"2022-11-28T17:26:33Z","content":"Aaftab Poonawala, accused of killing and chopping his partner Shraddha Walkar into 35 pieces, will undergo polygraph test tomorrow as well, the Tihar Jail administration said on Monday. \r\nOn Monday, … [+2060 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"What IFFI Jury Head Nadav Lapid Said About 'The Kashmir Files' - NDTV","description":"The movie 'The Kashmir Files' made the headlines on the final day of the 53rd International Film Festival of India, with the jury calling the film 'propoganda'.","url":"https://www.ndtv.com/india-news/what-iffi-jury-head-nadav-lapid-said-about-the-kashmir-files-3561139","urlToImage":"https://c.ndtvimg.com/2022-11/r01e2n8_kashmir-files_625x300_28_November_22.jpg","publishedAt":"2022-11-28T17:25:51Z","content":"'The Kashmir Files' focuses on the exodus of Kashmiri Pandits from the Valley in the 1990s.\r\nNew Delhi: The movie 'The Kashmir Files' made the headlines on the final day of the 53rd International Fil… [+1436 chars]"},{"source":{"id":null,"name":"Pib.gov.in"},"author":null,"title":"India's SARAS radio telescope provides astronomers clues to the nature of Universe's first stars and galaxies - PIB","description":"Scientists have determined properties of radio luminous galaxies formed just 200 million years post","url":"https://pib.gov.in/PressReleasePage.aspx?PRID=1879653","urlToImage":"https://164.100.158.168/images/indian-emblem.png","publishedAt":"2022-11-28T16:00:00Z","content":"Ministry of Science &amp; Technology\r\nPosted On:\r\n 28 NOV 2022 9:30PM by PIB Delhi\r\nScientists have determined properties of radio luminous galaxies formed just 200 million years post the Big Bang, a… [+5275 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"China Covid Protests Live Updates: UK tells Chinese government to take notice of lockdown protests; China defends zero-Covid policy in the face of massive protests - The Indian Express","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiUmh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS93b3JsZC9jaGluYS1jb3ZpZC1wcm90ZXN0cy1saXZlLXVwZGF0ZXMtODI5MzYzOC_SAVdodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvd29ybGQvY2hpbmEtY292aWQtcHJvdGVzdHMtbGl2ZS11cGRhdGVzLTgyOTM2MzgvbGl0ZS8?oc=5","urlToImage":null,"publishedAt":"2022-11-28T15:52:43Z","content":null},{"source":{"id":null,"name":"Livemint"},"author":"Meghna Sen","title":"Sensex may hit 80,000 by Dec 2023, says Morgan Stanley. But there's a catch | Mint - Mint","description":"India might have to wait until early next year to see its bonds enter the JPMorgan emerging market global index","url":"https://www.livemint.com/market/stock-market-news/sensex-may-hit-80-000-by-dec-2023-but-there-s-a-catch-11669643934903.html","urlToImage":"https://images.livemint.com/img/2022/11/28/600x338/sensex_1669646387530_1669646387758_1669646387758.jpg","publishedAt":"2022-11-28T14:40:37Z","content":"BSE Sensex is expected to hit 80,000 by December 2023 if India is included in the global bond indexes and prices of commodities including oil and fertilisers correct sharply and earnings growth compo… [+3300 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"On Camera, Men With Swords Attack Police Van Carrying Aaftab Poonawala - NDTV","description":"Police van carrying Aaftab Poonawala, accused of killing girlfriend, attacked in Delhi","url":"https://www.ndtv.com/india-news/police-van-carrying-aaftab-poonawala-accused-of-killing-girlfriend-attacked-in-delhi-3560411","urlToImage":"https://c.ndtvimg.com/2022-11/rb24b0c8_attack-on-aaftab-poonawala_650x400_28_November_22.jpg","publishedAt":"2022-11-28T14:29:00Z","content":"New Delhi: A police van carrying Aaftab Amin Poonawala -- accused of the horrific murder of girlfriend Shraddha Walkar in Delhi -- was attacked by a group of sword-wielding men this evening. The poli… [+1690 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Entertainment Desk","title":"Aamir Khan's kids Ira Khan and Azad Rao Khan share a cute hug in new pic - Hindustan Times","description":"Ira Khan shared another series of pictures from her engagement ceremony on Monday. She posted a picture while giving a hug to her stepbrother Azad Rao Khan. She got engaged to Nupur Shikhare. | Bollywood","url":"https://www.hindustantimes.com/entertainment/bollywood/aamir-khan-s-kids-ira-khan-and-azad-rao-khan-share-a-cute-hug-in-new-pic-101669639606548.html","urlToImage":"https://images.hindustantimes.com/img/2022/11/28/1600x900/IraKhanhugsstepbrotherAzadRaoKhanatherengagement_1669640803294_1669640803441_1669640803441.jpeg","publishedAt":"2022-11-28T14:13:23Z","content":"Aamir Khan's daughter Ira Khan took to Instagram and shared pictures from her engagement ceremony. She shared a series of solo pictures of hers on Monday. She also posted a picture giving a hug to he… [+2013 chars]"},{"source":{"id":null,"name":"Moneycontrol"},"author":"Moneycontrol News","title":"CLSA upgrades Paytm stock to buy from sell - Moneycontrol","description":"The recent price correction makes risk-reward &quot;favourable&quot;, CLSA said, adding that the company has more than $1 billion cash on the balance sheet.","url":"https://www.moneycontrol.com/news/business/clsa-upgrades-outlook-on-paytm-from-sell-to-buy-9615581.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2017/11/RTX30SOV-770x433.jpg","publishedAt":"2022-11-28T13:34:15Z","content":"CLSA has upgraded its outlook on the stock of payment services company Paytm from 'sell' to 'buy', as per a report released by the foreign brokerage firm on November 28.\r\nThe recent price correction … [+2710 chars]"},{"source":{"id":null,"name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Adani Port: Violent protests over billionaire's Kerala project - BBC","description":"Protests in Kerala state against billionaire Gautam Adani's port project turned violent over the weekend.","url":"https://www.bbc.com/news/world-asia-india-63725900","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/10EB4/production/_127800396_vizhijam.jpg","publishedAt":"2022-11-28T13:29:58Z","content":"A mob stormed a police station in the southern Indian state of Kerala on Sunday night, injuring 36 police officers, as months of protests against a port project escalated into violence.\r\nThe port is … [+3608 chars]"},{"source":{"id":null,"name":"Cricbuzz"},"author":null,"title":"Gaikwad special powers Maharashtra into Vijay Hazare semis | Cricbuzz.com - Cricbuzz - Cricbuzz","description":"Karnataka, Saurashtra and Assam won their respective quarterfinal games","url":"https://www.cricbuzz.com/cricket-news/124639/gaikwad-special-powers-maharashtra-into-vijay-hazare-semis","urlToImage":"http://www.cricbuzz.com/a/img/v1/600x400/i1/c249027/file-photo-ruturaj-gaikwad.jpg","publishedAt":"2022-11-28T13:27:43Z","content":"[File photo]: Ruturaj Gaikwad scored seven sixes in an over during his career-best 220* off 119 © BCCI/IPL\r\nPunjab vs Karnataka, Ahmedabad\r\nAbhishek Sharma's 109 and Sanvir Singh's all-round efforts … [+4558 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"\"Right To Freedom Of Religion Doesn't Include...\": Centre To Supreme Court - NDTV","description":"The Central government on Monday told the Supreme Court that the right to freedom of religion does not include a fundamental right to convert other people to a particular religion.","url":"https://www.ndtv.com/india-news/right-to-freedom-of-religion-doesnt-include-centre-to-supreme-court-3560034","urlToImage":"https://c.ndtvimg.com/2022-10/tthv9vd8_supreme-court-india-generic-pti_625x300_10_October_22.jpg","publishedAt":"2022-11-28T13:19:47Z","content":"The bench has now posted the matter for hearing on December 5.\r\nNew Delhi: The Central government on Monday told the Supreme Court that the right to freedom of religion does not include a fundamental… [+3290 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Indian authorities step up vaccination efforts as Mumbai sees surge in measles cases - CNA","description":"India's financial capital Mumbai is experiencing a surge in measles cases. Outbreaks in the wider state of Maharashtra have affected almost 7,000 children, a...","url":"https://www.youtube.com/watch?v=LryMc8ogxUY","urlToImage":"https://i.ytimg.com/vi/LryMc8ogxUY/maxresdefault.jpg","publishedAt":"2022-11-28T13:15:20Z","content":null},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"ET Online","title":"FM Nirmala Sitharaman concludes pre-budget meetings: Here's what India wants - Economic Times","description":"Sitharaman thanked the participants for sharing their valuable suggestions and assured them that the suggestions would be carefully considered while preparing the Budget. Budget for 2023-24 is likely to be presented on February 1 next year.","url":"https://economictimes.indiatimes.com/news/economy/policy/fm-nirmala-sitharaman-concludes-pre-budget-meeting-heres-what-india-wants/articleshow/95832199.cms","urlToImage":"https://img.etimg.com/thumb/msid-95832172,width-1070,height-580,imgsize-120644,overlay-economictimes/photo.jpg","publishedAt":"2022-11-28T13:09:00Z","content":"The week-long pre-budget consultation meetings for budget 2023-24 chaired by Union Finance and Corporate Affairs Minister Nirmala Sitharaman concluded on Monday.\r\nThe meeting was held in virtual mode… [+6155 chars]"},{"source":{"id":null,"name":"FreshPlaza.com"},"author":null,"title":"Elon Musk's SpaceX brings 'tomato seeds' to International Space Station - FreshPlaza.com","description":"It seems that 'Cosmic Tomatoes' will be introduced into space. SpaceX is presently delivering new supplies to the International Space Station. The mission took off from NASA's Kennedy Space…","url":"https://www.freshplaza.com/north-america/article/9482047/elon-musk-s-spacex-brings-tomato-seeds-to-international-space-station/","urlToImage":"https://www.freshplaza.com/remote/https/agfstorage.blob.core.windows.net/misc/FP_com/2022/11/28/Addret.jpg?preset=OgImage","publishedAt":"2022-11-28T13:06:04Z","content":"It seems that 'Cosmic Tomatoes' will be introduced into space. SpaceX is presently delivering new supplies to the International Space Station. The mission took off from NASA's Kennedy Space Center in… [+461 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"ANI","title":"Red Planet Day 2022: Mind-blowing facts about Mars - HT Tech","description":"Named after the Roman God of War, Mars, which even though it has a thin atmosphere composed primarily of carbon dioxide, still holds humanity's fascination centuries after its discovery.","url":"https://tech.hindustantimes.com/tech/news/red-planet-day-2022-mind-blowing-facts-about-mars-71669624565068.html","urlToImage":"https://images.hindustantimes.com/tech/img/2022/11/28/1600x900/Untitled_design_-_2022-11-28T160157855_1669631605264_1669631605384_1669631605384.png","publishedAt":"2022-11-28T12:25:15Z","content":"Mars, also known as the Red Planet due to its soil's colour, is the fourth planet from the Sun and Earth's neighbour which holds the potential to possibly host the humankind some day.\r\nThe humans hav… [+2435 chars]"},{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Oil prices erase 2022 gains as China's protests spark demand worries - Reuters","description":"Oil prices fell close to their lowest this year on Monday as street protests against strict COVID-19 curbs in China, the world's biggest crude importer, stoked concern over the outlook for fuel demand.","url":"https://www.reuters.com/markets/commodities/oil-drops-more-than-1-chinas-covid-protests-fuel-demand-worries-2022-11-28/","urlToImage":"https://www.reuters.com/resizer/Yd2FozICPoQphPdsolUMQlLa14w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/32UBU5ZSUNP6PAZH3JZPGAXLJQ.jpg","publishedAt":"2022-11-28T12:09:00Z","content":"Nov 28 (Reuters) - Oil prices fell close to their lowest this year on Monday as street protests against strict COVID-19 curbs in China, the world's biggest crude importer, stoked concern over the out… [+2382 chars]"}]}
  ]
}
