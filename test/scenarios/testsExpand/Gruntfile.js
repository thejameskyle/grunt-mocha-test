module.exports = function(grunt) {
  // Add our custom tasks.
  grunt.loadTasks('../../../tasks');

  // Project configuration.
  grunt.initConfig({
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      all: {
        expand: true,
        cwd: 'subfolder',
        src: ['*.js']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['mochaTest']);
};