module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            dev: {
                src: ["src/css/main.css"]
            },
            prod: {
                src: ["build/*", "build/**/*"]
            }
        },
        jshint: {
            dev: {
                src: ["src/js/**/*.js", "!src/js/scripts/*.js"]    
            }
        },
        
        less: {
            dev: {
                options: {
                    style: "expanded"
                },
                src: "src/less/main.less",
                dest: "src/css/main.css"
                
            }
        },
        autoprefixer: {
            dev: {
                options: {
                  browsers: ["last 5 versions"]  
                },
                src: "src/css/main.css"        
            }
        },
        concat: {
            options: {
                separator: ";"    
            },
            prod: {
                files: {
                    "build/js/scripts.js": "src/js/**/*.js"
                }    
            }
        },
        
        uglify: {
            prod: {
                options: {
                    mangle: false
                },
                files: {
                    "build/js/scripts.js": "build/js/scripts.js"    
                }
            }
        },
        
        cssmin: {
            prod: {
                files: {
                    "build/css/style.css": "src/css/style.css"
                }
            }
        },
        
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            prod: {
                files: {
                    "build/index.html": "src/index.html"
                }
            }
        },
        
        imagemin: {
            options: {
                optimizationLevel: 3
            },
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: "src/images/",
                        src: "*",
                        dest: "build/images/"
                    }
                ]
            }
        },
        
        watch: {
            dev:{
                files: ["src/**/*"],
                tasks: ["default"]
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask("dev", ["clean", "less", "autoprefixer"]);
    grunt.registerTask("prod", ["concat", "uglify", "cssmin", "htmlmin", "imagemin"]);
    grunt.registerTask("default", "dev");
    grunt.registerTask("build", ["dev", "prod"]);
};