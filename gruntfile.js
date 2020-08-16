module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concurrent:{
            task:['watch:autoprefixer','watch:jscompressor'],
            options:{
                logConcurrentOutput:true
            }
        },
        autoprefixer:{
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'src/client/assets/css/*.css',
                dest: 'src/public/assets/css/pre/'
            },
        },
        watch:{
            autoprefixer:
            {
                files: ['css/style.css'],
                tasks: ['autoprefixer', 'cssmin']
            },
            jscompressor: {
                files: ['js/*.js'],
                task: ['unglify']
            },
        },
        cssmin:{
            target:{
                files:{
                    'src/public/assets/css/master.min.css':['src/public/assets/css/pre/*.css']
                }
            }
        },
        uglify:
        {
            target:
            {
                files:
                {
                    //  'js/output.min.js':['js/*.js']
                    'src/public/assets/js/master.min.js': ['src/client/assets/js/*.js']
                }
            }
        },
        imagemin:
        {
            dynamic:
            {
                options:{
                    optimizationLevel:7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/client/assets/img/',//current working directory
                        src: ['**/*.{png,jpg,gif}','!build/**/*.{png,jpg,gif}'],
                        dest: 'src/public/assets/img/'
                    }
                ]
            }
        },
        // jshint:{   
        //     options: {
                
        //     "bitwise": true, //niemożność używania operatorów & i | - są rzadko używane, a często ktoś się myli
        //     "camelcase": true, //albo nazywasz zmienne takiSposob albo TAKI_SPOSOB, ale nie np. taki_sposob
        //     "curly": true, //wymagany curly bracer po pętli            
        //     "latedef": true, //nie można użyć zmiennej zanim się jej nie zdefinuje
        //     "newcap": true, //wymaganie pierwszej duzej litery w konstruktorach            
        //     "nonew": true,  //nie można stworzyć konstruktora bez przypisania go do niczego            
        //     "undef": true, //nie można użyć niezdefiniowanej zmiennej
        //     "unused": true, //informuje o tym, że stworzyliśmy zmienną, ale nie użyliśmy jej           
        //     "esnext": true, //piszemy zgodnie z najnowszą specyfikacją
        //     "sub": true,  //nie wyrzuca ostrzeżenia dla person['name'] twierdzi, że lepiej jest napisać: person.name.
        //     "browser": true, //dzięki temu nie wyrzuca błędów dla globalnych zmiennych
        //     "node": true, //można bez problemu korzystać z node
        //     "jquery": true, //j/w ale z jquery
        //     "devel": true, //alert nie wyrzuca ostrzeżenia           
        //     "strict": true // - pisanie w strict mode, jak się zrobi pewnego rodzaju "ciche" błędy to program normalnie, działa, z tym nie      
        //   },
        //   target:
        //   {
        //     src: ['src/public/assets/js/*.js']
        //   }
        // }
    })
}