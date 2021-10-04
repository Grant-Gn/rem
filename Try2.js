function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://wwwdis.ucl.ac.uk/~uczcegu/gazetteer.json', true); // Replace 'appDataServices' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }


function init() {
    loadJSON(function(response) {
     // Parsing JSON string into object
       actual_JSON = JSON.parse(response);
       console.log(actual_JSON);
       searchPlacesinArray(actual_JSON);    
    });
}


var places = {
  1:'Little St. Bartholomewes', 
2:'Russel street, at the sign of Atlas', 
3:'at the middle Temple-Gate, Fleet-street', 
4:'the Angel in St. Paul’s Church-yard', 
5:'Grub[-]street [neer the Upper-Pump]', 
6:'the Golden Ball in Winchester Street', 
7:'the Red Lion on London-Bridge', 
8:'the Golden Ball in St. Paul’s Church-Yard', 
9:'the Ship', 
10:'the south entrance of the Royall Exchange', 
11:'the Hand and Scepter near Temple-Bar', 
12:'the Black-Boy on London-Bridge', 
13:'Vine Court Middle Temple', 
14:'the Lamb in the Old-Baily', 
15:'the Three Flower-de-luces, Little Brittain', 
16:'the Gun neer the west-end of S. Pauls Church', 
17:'entrance into Popes-head-alley out of Cornhill', 
18:'the Angel [in Popes-head-Alley] in Cornhill [near the Royal Exchange]', 
19:'Russel-street, [near the Piazza’s of] Covent-Garden', 
20:'[the Star at the] corner of Bride-Lane, in Fleet-street', 
21:'the King’s Arms [in Pauls Church-yard]', 
22:'the [Black] Bear in St. Pauls Church-yard, over against the little North-Door', 
23:'the Bible in Cheap-side', 
24:'the Prince’s Arms in St. Paul’s Church-yard', 
25:'the Blew-Anchor in Cornhill, near the Exchange [in the Lower-Walk of the New-Exchange]', 
26:'Billiter-Lane', 
27:'the Princes-Arms in Chancery-lane', 
28:'near Stationers-Hall', 
29:'the [three] Gilt Cup, near St. Austins gate in Pauls Church-yard', 
30:'the George near Cliffords Inne in Fleet-street', 
31:'the King’s Arms in the Poultry', 
32:'the Ship and Anchor at the Bridge-foot on Southwark-side', 
33:'the Star[re] in St Pauls Church-yard', 
34:'the Bible in Newgate-street', 
35:'the Seven Stars in St. Paul’s Church-yard', 
36:'the Hand and Bible in Duck-Lane', 
37:'the [Golden] Pelican in little Brit[t]ain', 
38:'the Bible on Ludgate-Hill', 
39:'leaden-Hall', 
40:'Printing-Press in Cornhil, neer the Royal Exchange', 
41:'Deaths Arm, in Thredneedle-street, against the upper end of Broad-street', 
42:'Printing Press [at Gresham-Colledge-gate, near the church] in Broadstreet', 
43:'the Angel in Gresham-colledge', 
44:'printing-press in Little-Britain [over against the Pump]', 
45:'the Mayden-head in St. Pauls-Church yard', 
46:'the Black Swan in Pater-Noster-Row', 
47:'Clerken-well-Green', 
48:'the Sun in the Poultrey [next door to the Rose Tavern]', 
49:'the Globe in St. Pauls Church-yard', 
50:'the Black Raven in Duck Lane', 
51:'Jewen-Street', 
52:'the Fountain in St. Pauls Church-Yard', 
53:'the Star in Little-Britain', 
54:'George-yard, in Lombard-street', 
55:'the Green Dragon without Temple-Bar', 
56:'Thame-street Addlehill', 
57:'the Grey hound in Little-Britain, without Aldersgate', 
58:'the Crown [Tavern] in Duck-lane', 
59:'Benets-Hill, next dore to the Heraulds-Office', 
60:'the Golden Bell in Duck-lane', 
61:'Norwich', 
62:'the Rose in St. Paul’s Church-yard', 
63:'Hewes-Court in Black-Friers', 
64:'Post-House at [between] Charing-cross [and White Hall]', 
65:'Duck-lane', 
66:'the Angel at Lincolns-Inn-Back Gate', 
67:'the Black Boy [over against S. Dunstans Church] in Fleet-Street', 
68:'the King\'s Head in Fleet-Street', 
69:'the Crown in St. Paul’s Church-yard', 
70:'the Sun in St. Pauls Church-yard', 
71:'the Eagle and child in Pauls-Church yard by Saint Austines gate', 
72:'the Bible and Anchor in Tower-street near Mark-lane end', 
73:'the Three Pigeons [over against the Royal Exchange] in Cornhill', 
74:'the Green Dragon in St. Pauls Church-yard', 
75:'the Bible in St. Pauls Church-yard', 
76:'the Blew Bible in Bedford Street in Covent Garden', 
77:'the Phoenix in St. Paul’s Church-yard', 
78:'Bartholomewes Close the second door from the Half Moon Alley that goes into Aldersgate street', 
79:'the Bishop’s-Head in S. Paul’s Church-yard', 
80:'the Hat and Star in St. Paul’s Church-yard', 
81:'the [Black] Spread Eagle in Westminster-Hall', 
82:'the White Lion in the Old Bailey', 
83:'the Three Bibles in [neere the west end of] Pauls Church-yard', 
84:'the three Bibles [and Star] on London-Bridge', 
85:'the Old-Bailey [Baily, Baley, Bayley, Bayly]', 
86:'the Globe in Little Brittain', 
87:'the Three Pigeons over against the Inner-Temple-Gate in Fleetstreet', 
89:'the [Golden] Ring on Ludgate-Hill, over against the Old Bayly', 
90:'at the Kings-head, in the Old-Bailey', 
92:'the [golden] Ring in Little Britain', 
93:'Castle in Cornhil', 
94:'the [Three] Legs in the Poultery', 
95:'in St. Dunstans Church-Yard [in Fleetstreet]', 
96:'Grays-Inne-gate [in Holborn]', 
98:'the Lamb in Fleet-street, next White-Fryers Gate', 
99:'the Bible and Three Crowns at the lower end of Cheapside, near Mercers Chappel', 
100:'upper end of Bazing-hall street, near the Naggs-head Tavern', 
101:'the Black-spread Eagle at the west end of Pauls', 
102:'St. Bartholomew-Close', 
103:'Cross-keys-Court', 
104:'the Popes-head in the lower walk of the New-Exchange [and Middle Exchange in the Strand]', 
105:'the Cross-keys and Bible in Cornhill, near Stocks-market [in the Poultry]', 
106:'under [the Dial of] St. Dunstans church, in Fleet-street', 
107:'the Gun in Ivy-Lane', 
108:'Clarkenwell', 
109:'the Rainbow in Fleetstreet [near the Inner Temple-gate]', 
110:'Parliament Cross.', 
111:'New-Exchange-alley', 
112:'the Bible, in Duck-Lane', 
113:'the white Horse in Pauls Churchyard', 
114:'the Rose and Crown in Exchange-alley neer Lumbard-street', 
115:'the [holy] Lamb at the east-end of Pauls', 
116:'the Ship near the Royal-Exchange in Cornhill', 
117:'the Angell without Newgate', 
118:'the Lute in St. Pauls-Church-Yard', 
119:'the Gilden-Lion [gilded Lyon], in Pauls Church-yard', 
120:'St. Martin’s-Lane near Long-Acre, four doors from Newport-street', 
121:'[Red-Lyon-Court in] White-cross-street', 
122:'the Horse in Smith-field', 
123:'St. Sepulchres Church yard', 
124:'the Half Moon in the Old Bayley', 
125:'the Leg and Star in Cornhil; against the Royal Exchange', 
126:'the Dolphin in Pauls Church-yard', 
127:'Greyhound in St. Pauls Church-yard', 
128:'Smithfield, neer St Bartholomews gate', 
129:'Fleetstreet', 
130:'the Sun and Bible in Pie-Corner', 
131:'without Newgate', 
132:'the Black Raven in the Strand, near Worcester-House', 
133:'the Catherine Wheel near Charing Cross', 
134:'Thames-street', 
135:'Ludgate-Hill', 
136:'the Miter Tavern in Fanchurch-Street', 
137:'Addle-hill in Career-lane', 
138:'the Bell [in little Britain?]', 
139:'the Peacock against St. Dunstan’s Church in Fleetstreet', 
140:'without Temple-Bar', 
141:'New Exchange', 
142:'the Adam and Eve in Little Britain', 
143:'Star at the west end of St. Pauls', 
144:'London-Bridge', 
145:'the Halfe-Moon in Watlingstreet [neer S. Austins Gate]', 
146:'the Angel in Gilt-spur-street', 
147:'Popes-head-Alley [neer Cornhill]', 
148:'the Grashopper in the Poultry', 
149:'the Unicorn, under the piazza of the Royal Exchange', 
150:'[near the Meeting-House] in White-Hart court in Gracious-street', 
151:'the Three Keys in Nogs Head-Court in Grace-Church Street, over-against the Conduit', 
152:'Holloway-Lane, near Shoreditch', 
153:'Crooked-Billet in Holywell-Lane, Shoreditch', 
154:'Printing-House in Bells Wynd, at the head of the Court of Guard', 
155:'the Naked boy in Newgate street over against St. Martins Le grand', 
156:'the Rising-Sun in Cornhil', 
157:'the Minister Gate[s]', 
158:'the Sun against St. Dunstans Church in Fleetstreet', 
159:'Shoo-Lane, at the signe of the Dolphin', 
160:'Fleetstreet at the signe of Herculus Pillers', 
161:'the Black Boy in Pater-noster-Row', 
162:'the White Cock in Rood-lane', 
163:'the Rose and Crown without Temple-Bar', 
164:'the sign of the Queens Arms in St. Pauls Church-yard', 
165:'the Bell in St. Pauls Church-yard', 
166:'Paul’s Chain neer Doctors Commons', 
167:'Palm Tree near St. Dunstans Church in Fleetstreet', 
168:'Smithfield, at the Bible and Harpe', 
169:'Westminster-Hall', 
170:'the Blue Bible in Green Arbour in the Old-Bailey', 
171:'signe of the George at Fleet-bridge', 
172:'the Globe in Cannon-Street neer London-Stone', 
173:'the Ship in St. Paul’s Church Yard', 
174:'the George in Fleetstreet', 
175:'Crosse-keys at Pauls-gate', 
176:'the Sun in Gutter-lane near Cheapside', 
177:'the three Daggers in Fleet-street', 
178:'the Sign of the Bible, over against the Blew-Anchor', 
179:'the Anchor in the lower walk in the new Exchange', 
180:'the Turks head in Fleetstreet', 
182:'St. Pauls church-yard', 
183:'the Horsshoo [Horseshoe] in the Old Baley [Bailey]', 
184:'the Harrow', 
185:'the Flower de Luce', 
186:'the Bell in Fleetstreet', 
187:'near the Three Crowns, in Barbican', 
188:'the Gilded Acorn near St. Augustin’s church in St. Paul’s Church-yard', 
189:'University', 
190:'University', 
191:'University', 
192:'the Bible in Little-Brittain', 
193:'Peacock [at the west end] in St. Pauls Church Yard', 
194:'', 
195:'Newfishstreet-hill', 
196:'the Black Swan [and Bible] without Temple-Bar', 
197:'Little Britain', 
198:'the White-Lion in Duck-Lane', 
199:'', 
200:'next door to the Gun in Little Moorfields', 
201:'east-end of Christ-Church', 
202:'S. Thomas’s Southwark', 
205:'corner of Chancery-lane [and the Flower-de-Luce over against St. Dunstan’s-Church in Fleet-street]', 
206:'the Flower-de-Luce over against St Dunstans Church in Fleet-street', 
207:'south side of the Cow-gate a little above the Colledge winde', 
208:'Universitie of Edinburgh', 
209:'Aldersgate-street', 
210:'the Elephant and Castle without Temple-Bar', 
211:'Red Lyon [Lion] in St. Paul’s Church-Yard', 
212:'Printing-press for Pictures in Cornhill, near the Royal Exchange, over against Popes-head-alley', 
213:'the Harrow in the Poultrey', 
214:'the Dolphin in Skinner-Row', 
215:'the Bible and Crown near Essex Gate', 
216:'the Blackmoors head neer Fleet-bridge', 
217:'the Angel and Crown in St. Paul’s Church-Yard', 
218:'the Pell Mell', 
219:'the Stationers Arms [and Anchor] in the Piazza at the Royal Exchange, in Cornhil', 
220:'Exchange-Alley over against the Royal-Exchange in Cornhil', 
221:'the Kings Head, at Charing Cross, over against the Muse', 
222:'the Bible and Crown on Ludgate-hill', 
223:'the sign of the Feathers in St. Paul’s Church-Yard', 
224:'the Half-Moon in St. Pauls Church-yard', 
225:'the White-lyon neer Py-Corner', 
226:'Great Carter-Lane', 
227:'', 
228:'the Star in Bow-lane', 
229:'', 
230:'the Swan [in St. Paul’s Church-yard]', 
231:'the Dolphin and Crown in St. Paul’s Church-yard', 
232:'neare Holborne-Bridge', 
233:'St. Peter’s Parish', 
234:'Trinity College', 
235:'Jonathan’s Coffee-House in Exchange-Ally in Cornhill', 
236:'the three pidgeons in Bedford street in Covent Garden', 
237:'the Three Pidgeons in Cornhil', 
238:'the Hand and Bible on London Bridge', 
239:'Corner-house of Addle-hill [over against Baynards Castle]', 
240:'Huggins-alley, in Wood-street', 
241:'the White-Hart in West-Smitfield', 
242:'Distaff-Lane in the Old Change', 
243:'the Crown in Popes-head-alley', 
244:'lower end of Stonegate, near to the common hall gates', 
245:'Thames-street, next Puddle-dock-stairs', 
246:'next the Crown Tavern in Duck-lane', 
247:'the Black Bull in Cornhill', 
248:'the Black Horse in Aldersgate Street', 
249:'the Parrot in Paul’s Church-yard', 
250:'the Turks Head in Cornhil over against the Royal Exchange', 
251:'the White Hart at the west end of S. Paul’s church-yard', 
252:'the Rose and Crown in St. Paul’s Church-yard', 
253:'', 
254:'Lothbury, neer the Windmill', 
255:'Grubstreet neere the lower pumpe', 
256:'the Goat in Kings Street, or at his shop in Westminster-Hall', 
257:'the lower end of Cheapside entring into Mercers-chappel', 
258:'the White Lion in St. Pauls Churchyard, near the West end', 
259:'the Brasen Serpent in St. Paul’s Church-yard', 
260:'the Angel in the Old-Baily', 
261:'the Mari-gold in Pauls Church-yard', 
262:'the Star and Bible at the west-end of St. Pauls Church', 
263:'the Blue Bible in Bedford street in Coven-Garden', 
264:'first shop in Popes-head Alley, near the Exchange', 
265:'the bottle in S. Paul’s Church-yard', 
266:'shop next door to the sign of the Castle in Cornhill', 
267:'Golden Ball in Cornhill near the Poultry', 
268:'Greyhound in little Britain without Aldersgate', 
269:'Clerken-well-Close', 
270:'Inner Temple Gate', 
271:'the Two Angels and Crown, in Little Brittain', 
272:'shop in Cannon-street neer London-stone', 
273:'the Bishops Head in Duck-Lane', 
274:'shop in Exchange-ally', 
275:'the White Lion in Billiter-Lane', 
276:'the Crown in Chancery-lane under Serjeants-Inn', 
277:'the White-Lion in S. Pauls Church-yard, neer the Little North-door', 
278:'the Mitre within Temple-Barr', 
279:'under the Crown in West-Smithfield', 
280:'shop in the Temple near the Church', 
281:'the Bible in Pye-Corner', 
282:'the Bell without Temple-Barr', 
283:'Gresham Colledge Court', 
284:'the Turks Head, in Bishop-gate-street', 
285:'the Stationers Arms in Swithins Rents by the Royall Exchange', 
286:'the Cross-Keys in Bishops-gate-street, near Leaden-Hall', 
287:'the Sun in Westminster-Hall', 
288:'next door to the Goat, in Kingstreet Westminster', 
289:'the White-Hart in Little-Brittain', 
290:'in the Piazza, over against Popes head Alley, near the Royal Exchange', 
291:'the Angel in Duck-Lane', 
292:'Post-Office in Lumbard-street', 
293:'chancery-lane end next [near] fleet-street', 
294:'the Peacock in the Pultry near Cornhill', 
295:'corner shop of Popes Head Ally, on the right hand next Cornhill', 
296:'the Golden-ball under St. Dunstan’s Church in Fleet-street', 
297:'the Corner Shop of Little Lumber-street & Cornhill', 
298:'the Golden Lion in Little Britain, near the Lame Hospital Gate', 
299:'the Feathers in Lumbard Street near the post-office', 
300:'the Three Bibles in Pope’s-head-Alley', 
301:'the black Swan next Bernards Inn in Holborne', 
302:'the Crane in St. Pauls-Church-Yard', 
303:'the Black Swan in Ave-Mary-Lane', 
304:'the Sun and Bible on London-Bridge', 
305:'the [Black] Bear and Star in St. Paul’s Church-Yard', 
306:'the Atlas in Cornhil', 
307:'the Flower-de-luce, at the entrance of Popes-head Alley in Cornhill', 
308:'', 
309:'the Golden-Ball over against the Royal Exchange in Cornhill', 
310:'the Strand against Bedford-house', 
311:'St. Christophers Alley in Thredneedle-Street', 
312:'the Mitre [Miter] near Temple-Bar, in Fleetstreet', 
313:'The Theater', 
314:'The Savoy', 
315:'the Black Swan near Amen Corner', 
316:'next door to the Swan-Tavern, near Bide-Lane, in Fleet-Street', 
317:'Kings Arms in New-Street near Covent Garden', 
318:'the Sun in the Poultry', 
319:'the Harrow near Chancery-Lane End in Fleetstreet', 
320:'Maiden-head-Court in Great East-Cheap', 
321:'the Angel and Bible in Little-Britain', 
322:'Wardrobe-Court, in Great Carter-lane', 
323:'Covent-garden', 
325:'the Atlas in Warwick-Lane', 
326:'the Cross Keys in St. Martins Lane near Long Acre', 
327:'under the Royal-Exchange in Cornhill', 
328:'the Three Crowns, near the Royal-Exchange in Cornhill', 
329:'the Bible over against the Middle Temple-Gate, in Fleet-Street', 
330:'the Looking Glass on London-Bridge', 
331:'the Harrow in Little-Britain', 
332:'the Green Dragon in Ave-Mary Lane', 
334:'Petty Cannon-Hall, on the North side of St. Paul’s Church', 
335:'', 
336:'the Angel in the Poultrey', 
337:'the Angel and Bible without Temple-Bar', 
339:'Ave Mary Lane', 
340:'', 
341:'the Bible in the Poultry', 
342:'Basing-lane, near Bread-street', 
343:'the Maiden-head over against St. Dunstan’s Church in Fleet-street', 
344:'', 
345:'the Golden Falcon neer the New Exchange', 
346:'', 
347:'the Golden Anchor in Tower-street over against..Church', 
348:'Tenser Ally in Little Moor-Fields, at the signe of the Golden Key', 
349:'Mayden-lane near Goldsmiths-Hall', 
350:'Mercers-Chappel [in Cheapeside neare ye great Conduit]', 
351:'Snow-hill, without Newgate', 
352:'the two Sugar-loaves over against St. Antholins Church at the lower end of Watling-street', 
353:'Bazing-hall-street', 
354:'University', 
355:'the Crown in Fleetstreet between the two Temple-gates', 
356:'west-end of Pauls', 
357:'the Golden Ball in Westminster-Hall', 
358:'Goat Court on Ludgate Hill', 
359:'Printing-Press, in the Piazzo of the Royal-Exchange, over against Popes-head-Alley in Cornhil', 
360:'the Black-Raven near Salisbury-House in the Strand', 
361:'Exchange-Alley, by the Exchange-Coffee-House', 
362:'the Angel against the Church-door at the upper end of Thredneedle-street, near the Royal-Exchange', 
363:'Charing-Cross booksellers', 
364:'', 
365:'', 
366:'', 
367:'the Duke of Grafton’s Head in Grafton-Street, near Leycester-Fields', 
368:'the Crown in the Pall Mall', 
369:'the Printing-Press in the piazza under the Royal Exchange in Cornhill', 
370:'opposite to the Locken-buiths', 
371:'the Blew Ball in Hogsden, over against the Crooked Billet, near Shoreditch Church', 
372:'the Swan without Temple-Barr', 
373:' [unspecified]', 
375:'Cornehill near the Royal Exchange', 
376:'', 
377:'Powles Churchyard', 
378:'long Shop under S. Mildreds Church in the Poultry', 
380:'Great Woodstreete', 
381:'Pater-noster-row', 
382:'near Christes Church', 
383:'Hospitall Gate in Smithfield', 
384:'North door of S. Pauls Church', 
385:'Barbican, near Long Lane end', 
386:'Saint Donstones Church-yarde in Fleet-street', 
388:'shop on the north-side of the gate, a little beneath the crosse', 
389:'', 
391:'Chancery-lane', 
392:'the scriueners shop in Cliffords-Inne Lane', 
393:'shop at the signe of the golden Vnicorne in Pater-noster-row', 
394:'shop neere Fleet-Street Conduit', 
395:'Green Harbour', 
396:'[unspecified]', 
397:'shop in Watling-streete, adioyning to the Red Lyon Gate', 
398:'shop in Popes-head alley', 
399:'little north dore of Paules at the signe of the Gunne', 
400:'Kings armes in Cheapeside', 
402:'Fletestrete at the Signe of the George nere to saynt Dunstones churche ', 
404:'three Cranes in the Vintree', 
405:'Aldersgate streete ouer-against the pump', 
406:'Aldersgate beneath S. Martins', 
407:'blacke Friers by Ludgate', 
408:'flete strete, nere to S. Dunstons Church', 
409:'Paules Churchyard at the signe of the Lucrece', 
410:'litle Britayne streete, beyonde Aldersgate', 
411:'Fléetestreete at Temple barre', 
412:'Gutter lane at the signe of the halfe Egle and the Keye', 
414:'', 
415:'Paules Churchyarde, at the signe of the Sunne', 
417:'Paternoster Row, at the sign of the Talbot', 
418:'litle north doore of Paules at the signe of the Gun', 
419:'Aldersgate', 
422:'fletestrete, at the sygne of the George', 
425:'Fletestrete, beneath the conduit at the signe of Saint John Euangelyste', 
426:'Tygers-head in Pauls Church-yard', 
427:'fletestreate at the signe of the hande and starre wythin Temple barrei', 
428:'shop neere Holborne Conduit at the signe of the Gun', 
429:'at the signe of the Bible neere Guildhall-gate', 
430:'at the golden Lion, S Pauls Churchyard', 
431:'at the Royall Exchange', 
432:'shop under Saint Martins Church neare Ludgate', 
433:'Posterne Gate at Tower Hill', 
434:'saynt Martyns parysshe, at charynge crosse', 
435:'sygne of saynt Joh[a]n eua[n]gelyst in saynt Martyns parysshe in the felde besyde Charynge Crosse, in the bysshope of Norwytche rentes', 
436:'at the signe of the Crosse Keyes at Powles Wharfe', 
437:'Spred-Eagle, in Pauls Church-yard, neare the great north doore', 
440:'Southwark', 
441:'fletestrete at the sygne of the Rose Garland ', 
442:'Foster lane', 
443:'south doore of Pauls', 
446:'Saynte Johns streate', 
447:'between Paules Wharfe and Bainards Castle', 
448:'little Woodstreet', 
449:'Coleman-street, at the signe of the White Hinde', 
450:'Coven-garden neare the New Exchange', 
451:'Cloth Fayre, at the signe of the three Crownes', 
452:'at the blew Bible in Greene Arbor', 
453:'at the entrance into the Exchange', 
454:'shop in Gratious streete ouer against Leaden Hall', 
455:'Christ Church Walke', 
456:'west ende of Paules Church, at the signe of the Hedgehogge', 
457:'shoppe at the west dore of Paules', 
458:'Saint Mary-Hill, neere Billings-gate', 
459:'at the sygne of S. John Euangelyst, in the Duke of Suffolkes tentes, besyde Charynge Crosse', 
460:'at the signe of S. Iohn̄ Euangelyst besyde Charynge Crosse', 
461:'at the [sy]gne of S. Iohn̄ Euangelyst, by s. Martyns parysshe in the felde besyde the Duke of Suffolkes place, at Charynge Crosse,', 
462:'shop in Bedford-street in Coven-Garden, neere the New-Exchange', 
463:'at the great west-doore of Pauls, at the signe of the Star', 
464:'betweene Paules Wharfe and Baynards Castle', 
465:'Paules Churchyard at the signe of the Quenes Armes', 
468:'Grubstreet', 
469:'at the signe of the Crowne neer Ludgate', 
470:'Shop in S. Laurence-lane at the signe of the Bible', 
471:'Saint Dunstans Church-yard in Fleet-street', 
472:'St. Lawrence Lane', 
473:'Bedford-street over against the New-Exchange', 
474:'shop vnder St. Peters Church in Cornhill', 
475:'shop at St. Margrets Hill in Southwarke', 
476:'at the signe of the Talbot in Aldersgate-street', 
477:'shop in the upper end of the Old Bayly neere Newgate', 
478:'at the gilded Lyon in Ducke Lane', 
479:'shop without Temple-barre, at the Golden Anchor next the Nags-head Taverne', 
480:'at the two Tuns in little Britaine', 
481:'shop upon Snow-hill, neere the Sarasens head', 
482:'neere Charing-Crosse, at the signe of the White Lyon', 
483:'shop in Furnivals Inne Gate in Holborne', 
484:'shop in Pauls Church at the signe of the Craine', 
485:'shop in Cheape-side at the signe of the Bible', 
486:'Saint Dunstans Church-yard in Fleetstreet', 
487:'shop at the signe of the Bible without Newgate', 
488:'at the signe of the Globe in Cornehill, ouer-against the Royall Exchange', 
489:'in Pauls Church-yard at the signe of the three Pigeons', 
490:'shop in Hosier-lane', 
491:'shop without Temple- barre vnder S. Clements Church', 
492:'on the north-side of the hie street, a litle beneath the Crosse', 
493:'next Cliffords Inne- gate, in Fleet-streete', 
494:'Red-crosse street at the signe of the Ship', 
495:'at the signe of the Fox in Paules Church-yard', 
496:'at the signe of the starre on bred-streete Hill', 
497:'Pauls Churchyarde, at the signe of the Baule', 
498:'Gratious Street', 
499:'at the Rose and Crowne next aboue S. Andrewes Church in Holborne', 
500:'Adling street, at the signe of the white Swan, neare Bainards castel', 
501:'Gracious-streete', 
502:'Rose and Crowne neere Holborne bridge', 
503:'Blacke-friers by Lud-gate', 
504:'Aldersgate street at the signe of the Starre', 
505:'Great East-cheap', 
506:'the Map of the World, in St. Pauls Church-Yard', 
507:'the Bible in Gracious-Street', 
509:'Warwick Lane', 
510:'the King’s-Arms next St. Dunstan’s Church in Fleet-street', 
511:'the King’s-Head in St. Paul’s Church-Yard', 
512:'Cow lane', 
513:'Pater Noster rowe, at the signe of the Starre', 
514:'Lumbardstreete at the signe of the Cradle', 
515:'in Paules Churche yarde, at the southvvest doore of Paules', 
516:'long shop at the west dore of Paules. Church', 
517:'Poules Churchyeard at the corner shop on the right hand as ye come oute of Chepe', 
519:'n the house of (Robert Wyer) at the sygne of Seynt Ioh ?n Euangelyst, in S. Martyns Parysshe, besyde Charynge Crosse]', 
521:'Fletestrete at the signe of the Sunne ouer agaynst the Conduit', 
522:'Furnisalls-Inne Gate', 
523:'Grayes-Inne Gate, next Holburn', 
524:'the Angel in Ivie-lane', 
525:'the Stags-head near St. Gregories in St. Pauls-church-yard', 
526:'over against Exeter-Exchange in the Strand', 
527:'Cornhill', 
528:'the Repository in Gresham-Colledge', 
529:'the Harrow against the church in the Poultrey', 
530:'St. Thomas Apostles, next door to Black-lyon-Court', 
531:'the Globe in Mountague-Close', 
532:'next door to the Globe in Southwark', 
533:'besyde Suffolke place, at charynge Crosse', 
534:'Ludgate at the sygne of the Bishoppes Myter', 
535:'', 
536:'On the south syde of Aldermary churche', 
537:'weste door of Paules', 
538:'In Fletestrete, in the house of Thomas Berthelet, nere to the cundite, at the sygne of Lucrece', 
539:'flete strete, sygne of the golden Crosse', 
540:'', 
541:'at Mr. Galloway’s apothecary in Stonegate', 
543:'neare the Vine Taverne in Holborne', 
544:'near Fleet-Bridge', 
545:'Bible in Giltspur street', 
547:'shop entring into Popes-head Alley out of Lumbard-street ', 
548:'Princes Arms in St. Paul’s Church-Yard', 
550:'at the Black Bull, near the Royal Exchange', 
551:'Three Roses in Ludgate-street', 
552:'near Stationers-hall', 
553:'at the sign of the Temple near Temple-Bar in Fleetstreet', 
554:'at the sign of the Sun, on the north-side of the street, over against the Cross', 
555:'at the Adam and Eve in Little Brittain', 
556:'Amen-Corner', 
557:'House in Mark-Lane', 
558:'at the sign of the Three Hearts', 
559:'', 
560:'shop a little above the Cross', 
561:'at the Bible and Anchor in Cornhil', 
562:'Grate street', 
563:'in Well-Yard, near St. Bartholomew’s Hospital', 
564:'printing-press in Mincing-lane', 
565:'Kings-head in Cornhill', 
567:'next door to the Swan tavern, near Bride-Lane, in Fleet-street', 
568:'S. Peters Alley in Cornhill', 
569:'Marrier and Anchor upon New-Fish street Hill, near London-bridge', 
570:'Scalding-alley in the poultry', 
571:'Larkin, at the Coach and Horses without Bishopsgate', 
572:'next door to the Anchor Tavern in Sweethings-Rents in Cornhil', 
573:'Prince’s Arms in Ludgatestreet', 
574:'Gresham Colledg, next the stairs, entering upon the Exchange, near Bishopsgate-street', 
575:'at the Gridiron, near Turn-Stile in Holborn', 
576:'at the White-Swan, against St. Clement’s Church in the Strand', 
577:'shop at the Salutation near Hatton-Garden in Holborn', 
578:'Castle-street', 
579:'lower walk in the new Exchange', 
580:'Blue Ball in Duck-Lane', 
581:'next door to the Golden bottle in the Strand, at the middle Exchange door', 
582:'at the Lamb and Ink-Bottle, at the East-end of S. Pauls', 
583:'St. Brides Church-Yard', 
584:'at the sign of the Atlas on Ludgate-hill', 
585:'the Kings Arms in Chancery-Lane', 
586:'without Newgate, ouer agaynst Saint Sepulchers Church', 
588:'at the Sign of the Three Pidgeons in Bedford-street in Covent-Garden' 
} 

var results= [];

function searchPlacesinArray (actual_JSON) {
    console.log(actual_JSON);
  for (var i=0; i<(Object.keys(actual_JSON.names).length);i++){
      for (var key in places){
          if (results.includes([key])) {
              console.log('already')
          }
          else {
          if (key != "" && places[key].match(actual_JSON.names[i].name)) {
            var new_row = [key,actual_JSON.names[i].id, actual_JSON.names[i].title];
      results.push(new_row);
      }} 
  }
  document.getElementById("demo").innerHTML = results;
}
}

function initialise() {
    // create the tile layer with correct attribution
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {
        minZoom: 12,
        maxZoom: 30,
        attribution: osmAttrib
    });

    // create the map object
   myMap = new L.Map('map');
    //myMap.setMaxBounds(new L.LatLngBounds([42.485733, 9.147147], [51.415560, -8.025360]));

    // set the starting location
    myMap.setView(new L.LatLng(51.50853, -0.12574), 6);
    myMap.addLayer(osm);
    myMapDisplayed = false;
    myMapShapefiled = false;
}

function loadFile() {
    if (!myMapShapefiled) {
    input = document.getElementById('fileinput');
    if (!input.files[0]) {
        bodyAppend("p", "Please select a file before clicking 'Load'");
    }
    else {
        file = input.files[0];

        fr = new FileReader();
        fr.onload = receiveBinary;
        fr.readAsArrayBuffer(file);
    }
    function receiveBinary() {
        result = fr.result
        shapefile = new L.Shapefile(result);
        console.log(shapefile);
        shpfile = shapefile;
        shpfile.addTo(myMap);
    }
    myMapShapefiled = true;
}
}

//Remove shapefile
function clearJSON() {
    if (myMapShapefiled) {
        console.log(shpfile);
        myMap.removeLayer(shpfile);
        console.log(shpfile);
    }
    myMapShapefiled = false;
}

var bibu = "Clare Street"
function filterData() {
    for ( var item=58; item < (Object.keys(shapefile._layers).length);item++ ) {
        if (shapefile._layers[item]) {
            console.log('b');
            for (var idem=0; idem < Object.keys(results).length;idem++) {
                if (shapefile._layers[item].feature.properties.standard_1 == results[idem][2]) {
                    shapefile._layers[item].addTo(myMap);
                    console.log(bibu);
        } }
        } 
    }
}

function showOverlay() {
    if (myMapDisplayed == undefined || myMapDisplayed == false) {
        // Creating Image overlay
        var imageUrl = "agas.jpg";
        var imageSW = new L.LatLng(51.504355, -0.124062);
        var imageNE = new L.LatLng(51.516268, -0.083468);
        var imageBounds = [imageSW, imageNE];
        var imageOptions = {
            opacity: 0.5,
            attribution: "Agas map"
        };
        image = L.imageOverlay(imageUrl, imageBounds, imageOptions).addTo(myMap);
        myMapDisplayed = true;
    }
}

//Remove overlay
function clearImage() {
    if (myMapDisplayed) {
        {
            myMap.removeLayer(image);
        }
        myMapDisplayed = false;
    }
}