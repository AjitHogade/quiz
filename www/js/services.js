angular.module('dataProviders.services', [])

.factory('HtmlQ', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var html = [{
    id: 0,
    name: 'HTML is ________ language?',
    opt_1: 'Mark Up',
    opt_2: 'Server-side',
    opt_3: 'Client-side',
    opt_4: 'Non of these',
    correct_ans: 'opt_1'
  }, {
    id: 1,
    name: '<td> .. </td> tag is used for ________',
    opt_1: 'Table Data',
    opt_2: 'Table Head',
    opt_3: 'Table Row',
    opt_4: 'None of these',
    correct_ans: 'opt_1'
  }, {
    id: 2,
    name: 'HTML markup language is a set of Markup ___________.',
    opt_1: 'Sets',
    opt_2: 'Tags',
    opt_3: 'Attributes',
    opt_4: 'Groups',
    correct_ans: 'opt_2'
  }, {
    id: 3,
    name: 'Which of the following tag represents a section of the document intended for navigation in HTML5?',
    opt_1: 'Footer',
    opt_2: 'Section',
    opt_3: 'Nav',
    opt_4: 'dialog',
    correct_ans: 'opt_3'
  }, {
    id: 4,
    name: 'Which is true to change the text color to red?',
    opt_1: 'BODY BGCOLOR=RED',
    opt_2: 'BODY TEXT=RED',
    opt_3: 'BODY COLOR=RED',
    opt_4: 'None of these',
    correct_ans: 'opt_3'
  }, {
    id: 5,
    name: 'Choose the correct HTML tag to make a text italic.',
    opt_1: '<ii>',
    opt_2: '<italics>',
    opt_3: '<italic>',
    opt_4: '<i>',
    correct_ans: 'opt_4'
  }, {
    id: 6,
    name: 'Which of the following is not a valid alignment attribute?',
    opt_1: 'Left',
    opt_2: 'Right',
    opt_3: 'Top',
    opt_4: 'All of these',
    correct_ans: 'opt_3'
  }, {
    id: 7,
    name: 'HTML supports',
    opt_1: 'ordered lists',
    opt_2: 'unordered lists',
    opt_3: 'both type of lists',
    opt_4: 'does not support those types',
    correct_ans: 'opt_3'
  }, {
    id: 8,
    name: 'What tag is used to list individual items of an ordered list?',
    opt_1: 'LI',
    opt_2: 'OL',
    opt_3: 'UL',
    opt_4: 'None of these',
    correct_ans: 'opt_2'
  }, {
    id: 9,
    name: 'What does vlink attribute mean?',
    opt_1: 'visited link',
    opt_2: 'virtual link',
    opt_3: 'very good link',
    opt_4: 'active link',
    correct_ans: 'opt_1'
  }];

var html1 = [{
    id: 0,
    name: 'Which attribute can be used with BODY tag to set background color green?',
    opt_1: ' background=”green”',
    opt_2: 'bgcolor=”green”',
    opt_3: ' vlink=”green”',
    opt_4: 'Non of these',
    correct_ans: 'opt_1'
  }, {
    id: 1,
    name: 'Which attribute you’ll use with TD tag to merge two cells horizontally?',
    opt_1: 'merge=colspan2',
    opt_2: 'rowspan=2',
    opt_3: 'colspan=2',
    opt_4: 'merge=row2',
    correct_ans: 'opt_3'
  }, {
    id: 2,
    name: 'What should be the first tag in any HTML document?',
    opt_1: 'head',
    opt_2: 'title',
    opt_3: 'html',
    opt_4: 'document',
    correct_ans: 'opt_4'
  }, {
    id: 3,
    name: 'Which tag allows you to add a row in a table?',
    opt_1: '<td> and </td>',
    opt_2: '<cr> and </cr>',
    opt_3: '<th> and </th>',
    opt_4: '<tr> and </tr>',
    correct_ans: 'opt_4'
  }, {
    id: 4,
    name: 'Choose the correct HTML tag to make a text bold?',
    opt_1: '<b>',
    opt_2: '<bold>',
    opt_3: '<bb>',
    opt_4: '<bld>',
    correct_ans: 'opt_1'
  }, {
    id: 5,
    name: 'Choose the correct HTML tag for the smallest size heading?',
    opt_1: '<heading>',
    opt_2: '<h6>',
    opt_3: '<h1>',
    opt_4: '<head>',
    correct_ans: 'opt_4'
  }, {
    id: 6,
    name: 'What is the correct HTML tag for inserting a line break?',
    opt_1: '<lb>',
    opt_2: '<br>',
    opt_3: '<break>',
    opt_4: '<newline>',
    correct_ans: 'opt_2'
  }, {
    id: 7,
    name: 'Which tag is used to create body text in HTML?',
    opt_1: 'HEAD',
    opt_2: 'TEXT',
    opt_3: 'TITLE',
    opt_4: 'BODY',
    correct_ans: 'opt_4'
  }, {
    id: 8,
    name: 'Text within <STRONG> … </STRONG> tag is displayed as ________',
    opt_1: 'bold',
    opt_2: 'italic',
    opt_3: 'list',
    opt_4: 'intended',
    correct_ans: 'opt_1'
  }, {
    id: 9,
    name: 'using P tag will?',
    opt_1: 'start a new paragraph',
    opt_2: 'break the line',
    opt_3: 'end the current paragraph',
    opt_4: 'none of the above',
    correct_ans: 'opt_1'
  }];
  return {
    // all: function() {
    //   return chats;
    // },
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    get: function(quesId) {
      for (var i = 0; i < html.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (html[i].id === parseInt(quesId)) {
console.log(html[i])  
        return html[i];
        }
      }
      }
      return null;
    },
     getHtml1: function(quesId) {
      for (var i = 0; i < html1.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (html1[i].id === parseInt(quesId)) {
console.log(html1[i])  
        return html1[i];
        }
      }
      }
      return null;
    }
  };
})

.factory('CSSQ', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var cssTest1 = [{
    id: 0,
    name: 'What does CSS stand for?',
    opt_1: 'Colorful Style Sheets',
    opt_2: 'Creative Style Sheets',
    opt_3: 'Cascading Style Sheets',
    opt_4: 'Computer Style Sheets',
    correct_ans: 'opt_3'
  }, {
    id: 1,
    name: 'How do you insert a comment in a CSS file?',
    opt_1: '<!--this is a comment-->',
    opt_2: '// this is a comment',
    opt_3: '/* this is a comment */',
    opt_4: '// this is a comment //',
    correct_ans: 'opt_3'
  }, {
    id: 2,
    name: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    opt_1: 'In the head section',
    opt_2: 'At the top of the document',
    opt_3: 'In the body section',
    opt_4: 'At the end of the document',
    correct_ans: 'opt_1'
  }, {
    id: 3,
    name: 'Which HTML tag is used to define an internal style sheet?',
    opt_1: 'style',
    opt_2: 'script',
    opt_3: 'css',
    opt_4: 'html',
    correct_ans: 'opt_1'
  }, {
    id: 4,
    name: 'How do you change the text color of an element?',
    opt_1: 'color:',
    opt_2: 'text-color:',
    opt_3: 'text-color=',
    opt_4: 'fgcolor:',
    correct_ans: 'opt_1'
  }, {
    id: 5,
    name: 'The link tag goes inside',
    opt_1: 'the body section',
    opt_2: 'the title section',
    opt_3: 'the head section',
    opt_4: 'None of the above',
    correct_ans: 'opt_3'
  }, {
    id: 6,
    name: 'The id selector uses the id attribute of the HTML element, and is defined with a',
    opt_1: '@',
    opt_2: '_',
    opt_3: '%',
    opt_4: '#',
    correct_ans: 'opt_4'
  }, {
    id: 7,
    name: 'The id selector is used to specify a style for',
    opt_1: 'multiple,common element',
    opt_2: 'multiple,unique element',
    opt_3: 'single, common element',
    opt_4: 'single, unique element',
    correct_ans: 'opt_2'
  }, {
    id: 8,
    name: 'Which HTML attribute is used to define inline styles?',
    opt_1: 'class',
    opt_2: 'styles',
    opt_3: 'Font',
    opt_4: 'style',
    correct_ans: 'opt_4'
  }, {
    id: 9,
    name: 'Style sheet appears as a value of the ……… attribute.',
    opt_1: 'script',
    opt_2: 'sheet',
    opt_3: 'style',
    opt_4: 'jscript',
    correct_ans: 'opt_3'
  }];

var cssTest2 = [{
    id: 0,
    name: 'A ……… tag is used to specify that the browser is to fetch and use an external style sheet file',
    opt_1: 'sheet',
    opt_2: 'link',
    opt_3: 'src',
    opt_4: 'Non of these',
    correct_ans: 'opt_2'
  }, {
    id: 1,
    name: 'Which of the style sheet is also known as Embedded Style Sheet?',
    opt_1: 'Document Style Sheet',
    opt_2: 'Inline Style Sheet',
    opt_3: 'External Style Sheet',
    opt_4: 'None of these',
    correct_ans: 'opt_2'
  }, {
    id: 2,
    name: 'How many types of levels in style sheets?',
    opt_1: 'One level',
    opt_2: 'Two level',
    opt_3: 'Three level',
    opt_4: 'Four level',
    correct_ans: 'opt_3'
  }, {
    id: 3,
    name: 'CSS provided the basic styles such as',
    opt_1: 'specifying font and font styles',
    opt_2: 'setting margins',
    opt_3: 'applying colors',
    opt_4: 'All of the above',
    correct_ans: 'opt_4'
  }, {
    id: 4,
    name: 'To inserting a style sheet',
    opt_1: 'External style sheet',
    opt_2: 'Internal style sheet',
    opt_3: 'Inline style sheet',
    opt_4: 'All of the above',
    correct_ans: 'opt_4'
  }, {
    id: 5,
    name: 'A ……… tag is used to specify that the browser is to fetch and use an external style sheet file',
    opt_1: 'sheet',
    opt_2: 'link',
    opt_3: 'src',
    opt_4: 'None of the above',
    correct_ans: 'opt_2'
  }, {
    id: 6,
    name: 'An internal style sheet should be used when a single document has a',
    opt_1: 'unique style',
    opt_2: 'common style',
    opt_3: 'either (A) or (B)',
    opt_4: 'None of these',
    correct_ans: 'opt_1'
  }, {
    id: 7,
    name: 'A CSS declaration always ends with a ……………., and declaration groups are surrounded by ………………….',
    opt_1: 'semicolon and curly brackets',
    opt_2: 'semicolon and square brackets',
    opt_3: 'either (A) or (B)',
    opt_4: 'neither (A) or nor (B)',
    correct_ans: 'opt_1'
  }, {
    id: 8,
    name: 'The Disadvantages of Cascading Style Sheets is',
    opt_1: 'Low Performance',
    opt_2: 'High Performance',
    opt_3: 'Browsers Compatibility',
    opt_4: 'All of these',
    correct_ans: 'opt_3'
  }, {
    id: 9,
    name: 'Which is the superior styles of html?',
    opt_1: 'CSS',
    opt_2: 'frame',
    opt_3: 'iframe',
    opt_4: 'none of these',
    correct_ans: 'opt_1'
  }];
  return {
 
    getCssTest1: function(quesId) {
      for (var i = 0; i < cssTest1.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (cssTest1[i].id === parseInt(quesId)) {
console.log(cssTest1[i])  
        return cssTest1[i];
        }
      }
      }
      return null;
    },
     getCssTest2: function(quesId) {
      for (var i = 0; i < cssTest2.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (cssTest2[i].id === parseInt(quesId)) {
console.log(cssTest2[i])  
        return cssTest2[i];
        }
      }
      }
      return null;
    }
  };
})


.factory('JsQ', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var jsTest1 = [{
    id: 0,
    name: 'Javascript is _________ language.',
    opt_1: 'Scripting',
    opt_2: 'Application',
    opt_3: 'Programming',
    opt_4: 'None of the above',
    correct_ans: 'opt_1'
  }, {
    id: 1,
    name: 'JavaScript is ______ Side Scripting Language.',
    opt_1: 'Browser',
    opt_2: 'ISP',
    opt_3: 'Server',
    opt_4: 'None of these',
    correct_ans: 'opt_1'
  }, {
    id: 2,
    name: 'JavaScript is designed for following purpose',
    opt_1: 'To Execute Query Related to DB on Server',
    opt_2: 'To Perform Server Side Scripting Opertion',
    opt_3: 'To Style HTML Page',
    opt_4: 'To add interactivity to HTML Pages',
    correct_ans: 'opt_4'
  }, {
    id: 3,
    name: 'What should appear at the very end of your JavaScript?',
    opt_1: 'The </script> tag',
    opt_2: 'The <script> tag',
    opt_3: 'The END statement',
    opt_4: ' None of the above',
    correct_ans: 'opt_1'
  }, {
    id: 4,
    name: '______ tag is an extension to HTML that can enclose any number of JavaScript statements.',
    opt_1: 'SCRIPT',
    opt_2: 'BODY',
    opt_3: 'HEAD',
    opt_4: 'TITLE',
    correct_ans: 'opt_1'
  }, {
    id: 5,
    name: 'What is the correct JavaScript syntax to write "Hello World"?',
    opt_1: 'System.out.println("Hello World")',
    opt_2: 'println ("Hello World")',
    opt_3: 'document.write("Hello World")',
    opt_4: 'response.write("Hello World")',
    correct_ans: 'opt_3'
  }, {
    id: 6,
    name: 'JavaScript is invented by ________.',
    opt_1: 'Helsinki, Linus',
    opt_2: 'Brendan Eich',
    opt_3: 'James Gosling',
    opt_4: 'W3 Group',
    correct_ans: 'opt_2'
  }, {
    id: 7,
    name: 'JavaScript Statements are executed by ________ ',
    opt_1: 'Server',
    opt_2: 'browser',
    opt_3: 'JVM',
    opt_4: 'Compiler',
    correct_ans: 'opt_1'
  }, {
    id: 8,
    name: 'JavaScript code contain sequence of ___________?',
    opt_1: 'HTML Tags',
    opt_2: 'Method Calls',
    opt_3: 'Executable Statements',
    opt_4: 'All of these',
    correct_ans: 'opt_4'
  }, {
    id: 9,
    name: 'Which of the following statement is used to declare variable in JavaScript ?',
    opt_1: 'Assignment Statement',
    opt_2: 'Conditional Statement',
    opt_3: 'Declaration Statement',
    opt_4: 'Executable Statement',
    correct_ans: 'opt_3'
  }];

var jsTest2 = [{
    id: 0,
    name: 'Variable can hold ________ value at a time',
    opt_1: 'Single',
    opt_2: 'Multiple',
    opt_3: 'Double',
    opt_4: 'None of these',
    correct_ans: 'opt_1'
  }, {
    id: 1,
    name: 'Integer Variable is declared using following syntax in JavaScript',
    opt_1: 'var num;',
    opt_2: 'integer num;',
    opt_3: 'Integer num;',
    opt_4: 'int num;',
    correct_ans: 'opt_1'
  }, {
    id: 2,
    name: 'Which is the correct way to write a JavaScript array?',
    opt_1: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
    opt_2: 'var txt = new Array:1=("tim")2=("kim")3=("jim")',
    opt_3: 'var txt = new Array("tim","kim","jim")',
    opt_4: 'var txt = new Array="tim","kim","jim"',
    correct_ans: 'opt_3'
  }, {
    id: 3,
    name: 'We can declare ___________ at a time. Select most appropriate option.',
    opt_1: 'One Variable Only',
    opt_2: 'One or more Variables',
    opt_3: 'More than One Variables',
    opt_4: 'None of the above',
    correct_ans: 'opt_2'
  }, {
    id: 4,
    name: 'We can declare all type of variables in JavaScript with the keyword _____________',
    opt_1: 'obj',
    opt_2: 'var',
    opt_3: 'jvar',
    opt_4: 'None of these',
    correct_ans: 'opt_2'
  }, {
    id: 5,
    name: 'Using _______ statement is how you test for a specific condition.',
    opt_1: 'Select',
    opt_2: 'if',
    opt_3: 'for',
    opt_4: 'switch',
    correct_ans: 'opt_2'
  }, {
    id: 6,
    name: '"Add and Assignment" operator is shown by this symbol.',
    opt_1: '==+',
    opt_2: '++=',
    opt_3: '+==',
    opt_4: '+=',
    correct_ans: 'opt_4'
  }, {
    id: 7,
    name: 'The syntax of close method for document object is _____________',
    opt_1: ' Close(doC)',
    opt_2: 'Close(object)',
    opt_3: 'Close(val)',
    opt_4: 'Close()',
    correct_ans: 'opt_3'
  }, {
    id: 8,
    name: '"+=" operator can operate on following data values',
    opt_1: 'Integer',
    opt_2: 'Float',
    opt_3: 'String',
    opt_4: 'All of these',
    correct_ans: 'opt_4'
  }, {
    id: 9,
    name: 'What is mean by "this" keyword in javascript?',
    opt_1: 'It refers current object',
    opt_2: 'It referes previous object',
    opt_3: 'It is variable which contains value',
    opt_4: 'None of the above',
    correct_ans: 'opt_1'
  }];
  return {
 
    getJs1: function(quesId) {
      for (var i = 0; i < jsTest1.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (jsTest1[i].id === parseInt(quesId)) {
console.log(jsTest1[i])  
        return jsTest1[i];
        }
      }
      }
      return null;
    },
     getJs2: function(quesId) {
      for (var i = 0; i < jsTest2.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (jsTest2[i].id === parseInt(quesId)) {
console.log(jsTest2[i])  
        return jsTest2[i];
        }
      }
      }
      return null;
    }
  };
})

.factory('PhpQ', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var phpTest1 = [{
    id: 0,
    name: 'What does PHP stand for?',
    opt_1: 'Personal Home Page',
    opt_2: 'Hypertext Preprocessor',
    opt_3: 'Pretext Hypertext Processor',
    opt_4: 'Preprocessor Home Page',
    correct_ans: 'opt_2'
  }, {
    id: 1,
    name: 'PHP files have a default file extension of..',
    opt_1: '.html',
    opt_2: '.xml',
    opt_3: '.php',
    opt_4: '.ph',
    correct_ans: 'opt_3'
  }, {
    id: 2,
    name: 'Which of the following is/are a PHP code editor?',
    opt_1: 'Notepad',
    opt_2: 'Notepad++',
    opt_3: 'Adobe Dreamweaver',
    opt_4: 'All of the mentioned.',
    correct_ans: 'opt_4'
  }, {
    id: 3,
    name: 'Which of the following PHP statements will output Hello World on the screen?',
    opt_1: 'echo (“Hello World”);',
    opt_2: 'display (“Hello World”);',
    opt_3: 'show (“Hello World”);',
    opt_4: 'None of the above',
    correct_ans: 'opt_1'
  }, {
    id: 4,
    name: 'Which of the following term originates from the Greek language that means “having multiple forms,” defines OOP’s ability to redefine, a class’s characteristics?',
    opt_1: 'Abstraction',
    opt_2: 'Polymorphism',
    opt_3: 'Inheritance',
    opt_4: 'Differential',
    correct_ans: 'opt_2'
  }, {
    id: 5,
    name: 'Which one of the following property scopes is not supported by PHP?',
    opt_1: 'friendly',
    opt_2: 'final',
    opt_3: 'public',
    opt_4: 'static',
    correct_ans: 'opt_1'
  }, {
    id: 6,
    name: 'Which version of PHP introduced the instanceof keyword?',
    opt_1: 'PHP 4',
    opt_2: 'PHP 5',
    opt_3: 'PHP 5.3',
    opt_4: 'PHP 6',
    correct_ans: 'opt_2'
  }, {
    id: 7,
    name: 'Which one of the following functions is used to determine whether a class exists?',
    opt_1: 'exist()',
    opt_2: 'exist_class()',
    opt_3: 'class_exist()',
    opt_4: '__exist()',
    correct_ans: 'opt_3'
  }, {
    id: 8,
    name: 'Which version of PHP was added with Exception handling?',
    opt_1: 'PHP 4',
    opt_2: 'PHP 5',
    opt_3: 'PHP 5.3',
    opt_4: 'PHP 6',
    correct_ans: 'opt_2'
  }, {
    id: 9,
    name: 'Which of the following statements invoke the exception class?',
    opt_1: 'throws new Exception();',
    opt_2: 'throw new Exception();',
    opt_3: 'new Exception();',
    opt_4: 'new throws Exception();',
    correct_ans: 'opt_2'
  }];

var phpTest2 = [{
    id: 0,
    name: 'Variables always start with a ........ in PHP',
    opt_1: 'Pond-sign',
    opt_2: 'Yen-sign',
    opt_3: 'Dollar-sign',
    opt_4: 'Euro-sign',
    correct_ans: 'opt_3'
  }, {
    id: 1,
    name: 'What is the best all-purpose way of comparing two strings?',
    opt_1: 'Using the strpos function',
    opt_2: 'Using the == operator',
    opt_3: 'Using strcasecmp()',
    opt_4: 'Using strcmp()',
    correct_ans: 'opt_4'
  }, {
    id: 2,
    name: 'The ___________ function can be used to compare two strings using a case-insensitive binary algorithm',
    opt_1: 'strcmp()',
    opt_2: 'stricmp()',
    opt_3: 'strcasecmp()',
    opt_4: 'stristr()',
    correct_ans: 'opt_3'
  }, {
    id: 3,
    name: 'Which array function checks if the specified key exists in the array?',
    opt_1: 'array_key_exist()',
    opt_2: ' array_key_exists()',
    opt_3: 'array_keys_exists()',
    opt_4: 'arrays_key_exists()',
    correct_ans: 'opt_2'
  }, {
    id: 4,
    name: 'Assume you would like to sort an array in ascending order by value while preserving key associations. Which of the following PHP sorting functions would you use?',
    opt_1: 'ksort()',
    opt_2: 'asort()',
    opt_3: 'krsort()',
    opt_4: 'usort()',
    correct_ans: 'opt_2'
  }, {
    id: 5,
    name: 'What function computes the difference of arrays?',
    opt_1: 'array_diff',
    opt_2: 'diff_array',
    opt_3: 'arrays_diff',
    opt_4: ' diff_arrays',
    correct_ans: 'opt_1'
  }, {
    id: 6,
    name: 'What functions count elements in an array?',
    opt_1: 'count',
    opt_2: 'Array_Count',
    opt_3: 'array_count',
    opt_4: 'Count_array',
    correct_ans: 'opt_3'
  }, {
    id: 7,
    name: '.................Checks a date for numeric validity.',
    opt_1: 'check_date',
    opt_2: 'verifydate',
    opt_3: 'Verify_date',
    opt_4: 'checkdate',
    correct_ans: 'opt_4'
  }, {
    id: 8,
    name: 'PHP sessions are created using the . . . . . function.',
    opt_1: 'session_starts()',
    opt_2: 'sessions_start()',
    opt_3: 'session_start()',
    opt_4: 'None of these',
    correct_ans: 'opt_3'
  }, {
    id: 9,
    name: 'Sessions allow you to',
    opt_1: 'store persistent user preference on a site',
    opt_2: 'save user authentication information from page to page',
    opt_3: 'create multipage forms',
    opt_4: 'all of above',
    correct_ans: 'opt_4'
  }];
  return {
 
    getPhp1: function(quesId) {
      for (var i = 0; i < phpTest1.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (phpTest1[i].id === parseInt(quesId)) {
console.log(phpTest1[i])  
        return phpTest1[i];
        }
      }
      }
      return null;
    },
     getPhp2: function(quesId) {
      for (var i = 0; i < phpTest2.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (phpTest2[i].id === parseInt(quesId)) {
console.log(phpTest2[i])  
        return phpTest2[i];
        }
      }
      }
      return null;
    }
  };
})


.factory('CppQ', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var cppTest1 = [{
    id: 0,
    name: 'Which of the following type of class allows only one object of it to be created?',
    opt_1: 'Virtual class',
    opt_2: 'Abstract class',
    opt_3: 'Singleton class',
    opt_4: 'Friend class',
    correct_ans: 'opt_3'
  }, {
    id: 1,
    name: 'Which of the following is not a type of constructor?',
    opt_1: 'Copy constructor',
    opt_2: 'Friend constructor',
    opt_3: 'Default constructor',
    opt_4: 'Parameterized constructor',
    correct_ans: 'opt_2'
  }, {
    id: 2,
    name: 'Which of the following is not the member of class?',
    opt_1: 'Static function',
    opt_2: 'Friend function',
    opt_3: 'Const function',
    opt_4: 'Virtual function',
    correct_ans: 'opt_3'
  }, {
    id: 3,
    name: 'Which of the following concepts means determining at runtime what method to invoke?',
    opt_1: 'Data hiding',
    opt_2: 'Dynamic Typing',
    opt_3: 'Dynamic binding',
    opt_4: 'Dynamic loading',
    correct_ans: 'opt_3'
  }, {
    id: 4,
    name: 'Which of the following term is used for a function defined inside a class?',
    opt_1: 'Member Variable',
    opt_2: 'Member function',
    opt_3: ' Class function',
    opt_4: 'Classic function',
    correct_ans: 'opt_2'
  }, {
    id: 5,
    name: 'How many instances of an abstract class can be created?',
    opt_1: '5',
    opt_2: '1',
    opt_3: '13',
    opt_4: '0',
    correct_ans: 'opt_4'
  }, {
    id: 6,
    name: 'Which of the following concepts of OOPS means exposing only necessary information to client?',
    opt_1: 'Encapsulation',
    opt_2: 'Abstraction',
    opt_3: 'Data hiding',
    opt_4: 'Data binding',
    correct_ans: 'opt_3'
  }, {
    id: 7,
    name: '.Which of the following cannot be friend?',
    opt_1: 'Function',
    opt_2: 'class',
    opt_3: 'object',
    opt_4: 'operator function',
    correct_ans: 'opt_3'
  }, {
    id: 8,
    name: 'Which of the following concepts means adding new components to a program as it runs?',
    opt_1: 'Data hiding',
    opt_2: 'Dynamic typing',
    opt_3: 'Dynamic binding',
    opt_4: 'Dynamic loading',
    correct_ans: 'opt_4'
  }, {
    id: 9,
    name: 'Which of the following is the correct class of the object cout?',
    opt_1: 'iostream',
    opt_2: 'istream',
    opt_3: 'ostream',
    opt_4: 'ifstream',
    correct_ans: 'opt_3'
  }];

var cppTest2 = [{
    id: 0,
    name: 'Which of the following concepts means wrapping up of data and functions together?',
    opt_1: 'Abstraction',
    opt_2: 'Encapsulation',
    opt_3: 'Inheritance',
    opt_4: 'Polymorphism',
    correct_ans: 'opt_2'
  }, {
    id: 1,
    name: 'Which of the following functions are performed by a constructor?',
    opt_1: 'Construct a new class',
    opt_2: 'Construct a new object',
    opt_3: 'Construct a new function',
    opt_4: 'Initialize objects',
    correct_ans: 'opt_4'
  }, {
    id: 2,
    name: 'Which of the following cannot be used with the keyword virtual?',
    opt_1: 'class',
    opt_2: 'member functions',
    opt_3: 'constructor',
    opt_4: 'destructor',
    correct_ans: 'opt_4'
  }, {
    id: 3,
    name: 'Which of the following problem causes an exception?',
    opt_1: 'Missing semicolon in statement in main().',
    opt_2: 'A problem in calling function',
    opt_3: 'A syntax error',
    opt_4: 'A run-time error.',
    correct_ans: 'opt_2'
  }, {
    id: 4,
    name: 'Which of the following is not a type of inheritance?',
    opt_1: 'Multiple',
    opt_2: 'Multilevel',
    opt_3: 'Distributive',
    opt_4: 'Hierarchical',
    correct_ans: 'opt_3'
  }, {
    id: 5,
    name: 'Which of the following header file includes definition of cin and cout?',
    opt_1: 'istream.h',
    opt_2: 'ostream.h',
    opt_3: 'iomanip.h',
    opt_4: 'iostream.h',
    correct_ans: 'opt_4'
  }, {
    id: 6,
    name: 'What will happen if a class is not having any name?',
    opt_1: 'It cannot have a destructor.',
    opt_2: 'It cannot have a constructor.',
    opt_3: 'It is not allowed.',
    opt_4: 'Both A and B.',
    correct_ans: 'opt_4'
  }, {
    id: 7,
    name: 'Which inheritance type is used in the class given below? class A : public X, public Y {}',
    opt_1: 'Multilevel inheritance',
    opt_2: 'multiple inheritance',
    opt_3: 'hybrid inheritance',
    opt_4: 'hierarchical inheritance',
    correct_ans: 'opt_2'
  }, {
    id: 8,
    name: 'Which of the following access specifier is used as a default in a class definition?',
    opt_1: 'protected',
    opt_2: 'public',
    opt_3: 'private',
    opt_4: 'friend',
    correct_ans: 'opt_3'
  }, {
    id: 9,
    name: 'Which of the following provides a reuse mechanism? ',
    opt_1: 'Abstraction',
    opt_2: 'Inheritance',
    opt_3: 'Dynamic binding',
    opt_4: 'Encapsulation',
    correct_ans: 'opt_4'
  }];
  return {
 
    getCpp1: function(quesId) {
      for (var i = 0; i < cppTest1.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (cppTest1[i].id === parseInt(quesId)) {
console.log(cppTest1[i])  
        return cppTest1[i];
        }
      }
      }
      return null;
    },
     getCpp2: function(quesId) {
      for (var i = 0; i < cppTest2.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (cppTest2[i].id === parseInt(quesId)) {
console.log(cppTest2[i])  
        return cppTest2[i];
        }
      }
      }
      return null;
    }
  };
})



.factory('JavaQ', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var javaTest1 = [{
    id: 0,
    name: 'Which is a reserved word in the Java programming language?',
    opt_1: 'method',
    opt_2: 'native',
    opt_3: 'subclasses',
    opt_4: 'reference',
    correct_ans: 'opt_2'
  }, {
    id: 1,
    name: 'The old name of Java was ?',
    opt_1: 'J language',
    opt_2: 'oak',
    opt_3: 'oct',
    opt_4: 'None of above',
    correct_ans: 'opt_2'
  }, {
    id: 2,
    name: 'Java was first developed in?',
    opt_1: '1990',
    opt_2: '1993',
    opt_3: '1991',
    opt_4: '1996',
    correct_ans: 'opt_3'
  }, {
    id: 3,
    name: 'Which of the following feature is not supported by java ?',
    opt_1: 'Multithreading',
    opt_2: 'Reflection',
    opt_3: 'Operator Overloading',
    opt_4: 'Garbage Collection',
    correct_ans: 'opt_3'
  }, {
    id: 4,
    name: ' Which of the following is generated when the source code is successfully compiled?',
    opt_1: 'Output',
    opt_2: 'Bytecode',
    opt_3: 'Error',
    opt_4: 'None of these',
    correct_ans: 'opt_2'
  }, {
    id: 5,
    name: 'Which of the following is not keyword in java ?',
    opt_1: 'null',
    opt_2: 'import',
    opt_3: 'volatile',
    opt_4: 'package',
    correct_ans: 'opt_1'
  }, {
    id: 6,
    name: 'What is the full form of JDK ?',
    opt_1: 'Java Data Kit',
    opt_2: 'Java Defination Kit',
    opt_3: 'Java Development Kit',
    opt_4: 'Java Design Kit',
    correct_ans: 'opt_3'
  }, {
    id: 7,
    name: 'Which command is used to compile a java program ?',
    opt_1: 'javac',
    opt_2: 'java',
    opt_3: 'javad',
    opt_4: '.javadoc',
    correct_ans: 'opt_1'
  }, {
    id: 8,
    name: 'What is the full form of JVM',
    opt_1: 'Java Virtual Machine',
    opt_2: 'Java Variable Machine',
    opt_3: 'Java Virtual Mechanism',
    opt_4: 'Java Variable Mechanism',
    correct_ans: 'opt_1'
  }, {
    id: 9,
    name: 'The extension name of a Java source code file is ?',
    opt_1: '.java',
    opt_2: '.obj',
    opt_3: '.class',
    opt_4: '.exe',
    correct_ans: 'opt_1'
  }

];

var javaTest2 = [{
    id: 0,
    name: 'The JDK command to compile a class in the file Test.java is',
    opt_1: 'java Test',
    opt_2: 'javac Test.java',
    opt_3: 'javac Test',
    opt_4: 'javac Test java',
    correct_ans: 'opt_2'
  }, {
    id: 1,
    name: 'Who invented JAVA?',
    opt_1: 'James Gosling',
    opt_2: 'Dennis Ritchie',
    opt_3: 'Steve Jobs',
    opt_4: 'Bjarne Stroustrup',
    correct_ans: 'opt_1'
  }, {
    id: 2,
    name: 'Which method executes only once',
    opt_1: 'start()',
    opt_2: 'init()',
    opt_3: 'destroy()',
    opt_4: 'stop()',
    correct_ans: 'opt_2'
  }, {
    id: 3,
    name: 'Which type of inheritance is not supported by java',
    opt_1: 'multiple',
    opt_2: 'multilevel',
    opt_3: 'hierarchical',
    opt_4: 'single',
    correct_ans: 'opt_1'
  }, {
    id: 4,
    name: ' How many JDBC driver types does Sun define?',
    opt_1: '1',
    opt_2: '2',
    opt_3: '3',
    opt_4: '4',
    correct_ans: 'opt_4'
  }, {
    id: 5,
    name: 'Which of the following is not keyword in java ?',
    opt_1: 'null',
    opt_2: 'import',
    opt_3: 'volatile',
    opt_4: 'package',
    correct_ans: 'opt_1'
  }, {
    id: 6,
    name: 'What is the full form of JDK ?',
    opt_1: 'Java Data Kit',
    opt_2: 'Java Defination Kit',
    opt_3: 'Java Development Kit',
    opt_4: 'Java Design Kit',
    correct_ans: 'opt_3'
  }, {
    id: 7,
    name: 'Interfaces helps in which type of inheritance?',
    opt_1: 'Multiple interface',
    opt_2: 'Multilevel Interface',
    opt_3: 'Hirerchical Interface',
    opt_4: 'none of above',
    correct_ans: 'opt_1'
  }, {
    id: 8,
    name: 'Which driver is called as thin-driver in JDBC',
    opt_1: 'Type 1 Driver',
    opt_2: 'Type 2 Driver',
    opt_3: 'Type 3 Driver',
    opt_4: 'Type 4 Driver',
    correct_ans: 'opt_4'
  }, {
    id: 9,
    name: 'Which keyword is used while using interface',
    opt_1: 'extends',
    opt_2: 'implement',
    opt_3: 'access',
    opt_4: 'none of these',
    correct_ans: 'opt_2'
  }];
  return {
 
    getJava1: function(quesId) {
      for (var i = 0; i < javaTest1.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (javaTest1[i].id === parseInt(quesId)) {
console.log(javaTest1[i])  
        return javaTest1[i];
        }
      }
      }
      return null;
    },
     getJava2: function(quesId) {
      for (var i = 0; i < javaTest2.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (javaTest2[i].id === parseInt(quesId)) {
console.log(javaTest2[i])  
        return javaTest2[i];
        }
      }
      }
      return null;
    }
  };
})