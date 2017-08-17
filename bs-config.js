module.exports = {
    
        "port": 3000,
        "files": [ "./public/**/*.{html,htm,css,js}" ],
        "server": { 
          "baseDir": "./public" 
        },
        ghostMode: {
            links: true,
            forms: true,
            scroll: true
        }
    };
    
    