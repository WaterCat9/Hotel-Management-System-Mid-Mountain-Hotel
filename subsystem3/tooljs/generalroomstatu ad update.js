    const org_Singlerooms=[
        {id:101,status:0},
        {id:102,status:0},
        {id:103,status:0},
        {id:104,status:0},
        {id:105,status:1},
        {id:106,status:0},
        {id:107,status:1},
        {id:108,status:0},
        {id:109,status:0},
        {id:201,status:0},
        {id:202,status:0},
        {id:203,status:0},
        {id:204,status:0},
        {id:205,status:1},
    ]

    const org_Doublerooms=[
        {id:110,status:0},
        {id:111,status:0},
        {id:112,status:0},
        {id:113,status:0},
        {id:114,status:0},
        {id:115,status:1},
        {id:206,status:0},
        {id:207,status:0},
        {id:208,status:0},
        {id:209,status:0},
        {id:210,status:1},
        {id:301,status:0},
        {id:302,status:0},
        {id:303,status:0},
        {id:304,status:0},
        {id:305,status:0},
    ]

        const org_Quadrooms=[
        {id:211,status:0},
        {id:212,status:0},
        {id:213,status:0},
        {id:214,status:0},
        {id:215,status:1},
        {id:306,status:0},
        {id:307,status:0},
        {id:308,status:0},
        {id:309,status:0},
        {id:310,status:0},
        {id:311,status:1},
        {id:312,status:0},
        {id:313,status:0},
        {id:314,status:0},
        {id:315,status:0},
    ]
    const org_Businessrooms=[
        {id:401,status:0},
        {id:402,status:0},
        {id:403,status:0},
        {id:404,status:0},
        {id:405,status:1},
        {id:406,status:0},
        {id:407,status:0},
        {id:408,status:0},
    ]

    
    let singlerooms=loadsinglerooms()
    let doublerooms=loaddoublerooms()
    let quadrooms=loadquadrooms()
    let businessrooms=loadbusinessrooms()

    
    function loadsinglerooms(){
       const stored=localStorage.getItem('singlerooms');
       if (stored) {
            return JSON.parse(stored);
       }
       else{
            localStorage.setItem('singlerooms',JSON.stringify(org_Singlerooms));
            return org_Singlerooms;
       }
    }
    function loaddoublerooms(){
       const stored=localStorage.getItem('doublerooms');
       if (stored) {
            return JSON.parse(stored);
       }
       else{
            localStorage.setItem('doublerooms',JSON.stringify(org_Doublerooms));
            return org_Doublerooms;
       }
    }
    function loadquadrooms(){
       const stored=localStorage.getItem('quadrooms');
       if (stored) {
            return JSON.parse(stored);
       }
       else{
            localStorage.setItem('quadrooms',JSON.stringify(org_Quadrooms));
            return org_Quadrooms;
       }
    }
    function loadbusinessrooms(){
       const stored=localStorage.getItem('businessrooms');
       if (stored) {
            return JSON.parse(stored);
       }
       else{
            localStorage.setItem('businessrooms',JSON.stringify(org_Businessrooms));
            return org_Businessrooms;
       }
    }