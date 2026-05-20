export const DRIVERS = [
  {name:'Marcus Webb',      phone:'(201) 555-0184', cdl:'CDL-A · 8 yrs exp',  base:'Kearny, NJ',      initials:'MW', color:'#185fa5'},
  {name:'Sandra Kowalski',  phone:'(732) 555-0261', cdl:'CDL-A · 12 yrs exp', base:'Edison, NJ',      initials:'SK', color:'#3b6d11'},
  {name:'Darnell Pruitt',   phone:'(718) 555-0347', cdl:'CDL-A · 5 yrs exp',  base:'Bronx, NY',       initials:'DP', color:'#993c1d'},
  {name:'Carolyn Hutchins', phone:'(908) 555-0129', cdl:'CDL-A · 15 yrs exp', base:'Union City, NJ',  initials:'CH', color:'#854f0b'},
  {name:'Ray Thibodeau',    phone:'(516) 555-0473', cdl:'CDL-A · 9 yrs exp',  base:'Hempstead, NY',   initials:'RT', color:'#533ab7'},
  {name:'Yvette Salgado',   phone:'(347) 555-0592', cdl:'CDL-A · 6 yrs exp',  base:'Jamaica, NY',     initials:'YS', color:'#0f6e56'},
];

export const TRIPS = [
  {id:'TRP-001',d:0,o:'Port Newark',    dt:'Bethlehem PA',   tot:90,  emp:0,   hub:'Port Newark'},
  {id:'TRP-002',d:1,o:'Hunts Point',    dt:'Bridgeport CT',  tot:68,  emp:0,   hub:'Hunts Point'},
  {id:'TRP-003',d:2,o:'JFK Cargo',      dt:'White Plains',   tot:42,  emp:0,   hub:'JFK Cargo'},
  {id:'TRP-004',d:3,o:'Edison NJ',      dt:'Allentown PA',   tot:60,  emp:0,   hub:'Edison NJ'},
  {id:'TRP-005',d:4,o:'Meadowlands',    dt:'Albany NY',      tot:155, emp:0,   hub:'Meadowlands'},
  {id:'TRP-006',d:5,o:'Port Newark',    dt:'Bridgeport CT',  tot:110, emp:0,   hub:'Port Newark'},
  {id:'TRP-007',d:0,o:'Port Newark',    dt:'Allentown PA',   tot:75,  emp:0,   hub:'Port Newark'},
  {id:'TRP-008',d:1,o:'Edison NJ',      dt:'Bridgeport CT',  tot:110, emp:0,   hub:'Edison NJ'},
  {id:'TRP-009',d:2,o:'JFK Cargo',      dt:'Albany NY',      tot:165, emp:0,   hub:'JFK Cargo'},
  {id:'TRP-010',d:3,o:'Meadowlands',    dt:'Bethlehem PA',   tot:82,  emp:0,   hub:'Meadowlands'},
  {id:'TRP-011',d:4,o:'White Plains',   dt:'Port Newark',    tot:45,  emp:0,   hub:'Meadowlands'},
  {id:'TRP-012',d:5,o:'Hunts Point',    dt:'Edison NJ',      tot:32,  emp:0,   hub:'Hunts Point'},
  {id:'TRP-013',d:0,o:'Bethlehem PA',   dt:'Meadowlands',    tot:82,  emp:0,   hub:'Port Newark'},
  {id:'TRP-014',d:1,o:'Albany NY',      dt:'White Plains',   tot:148, emp:0,   hub:'Hunts Point'},
  {id:'TRP-015',d:2,o:'Allentown PA',   dt:'JFK Cargo',      tot:108, emp:0,   hub:'JFK Cargo'},
  {id:'TRP-016',d:0,o:'Bethlehem PA',   dt:'Port Newark',    tot:90,  emp:90,  hub:'Port Newark'},
  {id:'TRP-017',d:1,o:'Bridgeport CT',  dt:'Hunts Point',    tot:68,  emp:68,  hub:'Hunts Point'},
  {id:'TRP-018',d:2,o:'White Plains',   dt:'JFK Cargo',      tot:42,  emp:42,  hub:'JFK Cargo'},
  {id:'TRP-019',d:3,o:'Allentown PA',   dt:'Edison NJ',      tot:60,  emp:60,  hub:'Edison NJ'},
  {id:'TRP-020',d:4,o:'Albany NY',      dt:'Meadowlands',    tot:155, emp:155, hub:'Meadowlands'},
  {id:'TRP-021',d:5,o:'Bridgeport CT',  dt:'Port Newark',    tot:110, emp:110, hub:'Port Newark'},
  {id:'TRP-022',d:0,o:'Allentown PA',   dt:'Port Newark',    tot:75,  emp:75,  hub:'Port Newark'},
  {id:'TRP-023',d:1,o:'Bridgeport CT',  dt:'Edison NJ',      tot:110, emp:110, hub:'Hunts Point'},
  {id:'TRP-024',d:2,o:'Albany NY',      dt:'JFK Cargo',      tot:165, emp:165, hub:'JFK Cargo'},
  {id:'TRP-025',d:3,o:'Bethlehem PA',   dt:'Meadowlands',    tot:82,  emp:82,  hub:'Meadowlands'},
];

export const MATCHES = [
  {d:0,out:'Port Newark → Bethlehem PA',  back:'Bethlehem PA → Allentown PA', saved:68,  q:'Excellent'},
  {d:2,out:'JFK Cargo → White Plains',    back:'White Plains → Hunts Point',  saved:30,  q:'Good'},
  {d:3,out:'Edison NJ → Allentown PA',    back:'Allentown PA → Edison NJ',    saved:45,  q:'Excellent'},
  {d:1,out:'Bridgeport CT → JFK Cargo',   back:'JFK Cargo → Hunts Point',     saved:50,  q:'Good'},
  {d:4,out:'Albany NY → Meadowlands',     back:'Meadowlands → Bridgeport CT', saved:100, q:'Excellent'},
  {d:0,out:'Port Newark → Allentown PA',  back:'Allentown PA → JFK Cargo',    saved:55,  q:'Good'},
  {d:2,out:'JFK Cargo → Albany NY',       back:'Albany NY → White Plains',    saved:110, q:'Excellent'},
  {d:3,out:'Meadowlands → Bethlehem PA',  back:'Bethlehem PA → Port Newark',  saved:65,  q:'Good'},
  {d:5,out:'Bridgeport CT → Hunts Point', back:'Hunts Point → Edison NJ',     saved:45,  q:'Fair'},
  {d:0,out:'Bethlehem PA → Port Newark',  back:'Port Newark → Meadowlands',   saved:82,  q:'Excellent'},
  {d:4,out:'Port Newark → White Plains',  back:'White Plains → Bridgeport CT',saved:38,  q:'Fair'},
  {d:5,out:'Edison NJ → Bethlehem PA',    back:'Bethlehem PA → Meadowlands',  saved:40,  q:'Good'},
  {d:4,out:'Meadowlands → Bridgeport CT', back:'Bridgeport CT → Albany NY',   saved:70,  q:'Good'},
];

export const HUBS = {
  'Port Newark':   {x:195,y:220},
  'Hunts Point':   {x:268,y:140},
  'Meadowlands':   {x:170,y:168},
  'Edison NJ':     {x:152,y:272},
  'JFK Cargo':     {x:318,y:196},
  'Bethlehem PA':  {x:58, y:218},
  'Bridgeport CT': {x:402,y:100},
  'Albany NY':     {x:365,y:48},
  'Allentown PA':  {x:68, y:280},
  'White Plains':  {x:318,y:108},
};

export const HUB_COLORS = {
  'Port Newark':'#185fa5','Hunts Point':'#993c1d','Meadowlands':'#3b6d11',
  'Edison NJ':'#854f0b','JFK Cargo':'#533ab7','Bethlehem PA':'#73726c',
  'Bridgeport CT':'#0f6e56','Albany NY':'#ba7517','Allentown PA':'#638099',
  'White Plains':'#a32d2d',
};

export const MAIN_HUBS = ['Port Newark','Hunts Point','Meadowlands','Edison NJ','JFK Cargo'];