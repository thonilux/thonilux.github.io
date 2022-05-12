$(function () {
    var quotes = [
      {
        quote:
          "I am a hardware developer and graphic designer.",
        author: "Job",
        link: ""
      },{
        quote: "My daily job is to make custom products and made audiovisual. The product is requested by company clients and the audiovisual is for the company and my client.",
        author: "Activity",
        link: "#"
      },  
      {
        quote: "Working as Live Producer for EMJI JAYA. I Direct live multicam video production, Create branding needs for marketing purposes, Edit recorded video for client's requirement. (2017-Now)",
        author: "1st Experience",
        link: "https://www.google.com/search?channel=trow5&client=firefox-b-d&q=emji+jaya"
      },
      {
        quote: "Working as Custom Product and Services for CV. ENERMA ASA SENTOSA. I Create branding needs for marketing purposes, Edit recorded video for client needs, Doing hardware developing for custom products division(2021-Now)",
        author: "2nd Experience",
        link: "http://www.enerma.id"
      },
      {
        quote: "I study in electrical engineering at Sebelas Maret University",
        author: "Educational",
        link: "#"
      }
    ];
  
    // vars
    var i = 0;
    var x = 0;
    var result = [];
    var $element = $("#quote");
    var $tweet = $("#tweet-wrapper");
    var htmlOutput;
    // IIFE - get array of random numbers
    (function () {
      var minNum = 0;
      var maxNum = quotes.length;
      var randomNum = 0;
  
      while (result.length < maxNum) {
        // if random number doesnt exists in array push it to array
        if (result.indexOf(randomNum) > -1) continue;
        result.push(randomNum);
        randomNum++;
      }
    })();
  
    function output() {
      // x iterates quotes obj
      if (x < quotes.length) {
        var num = result[x];
  
        if (quotes[num].link == "#") {
          htmlOutput =
            "<p>" +
            quotes[num].quote +
            "</p>" +
            '<footer><a href="#" class="brackets author">' +
            quotes[num].author +
            '</a><span class="cursor blink">&#9646;</span></footer>';
        } else {
          htmlOutput =
            "<p>" +
            quotes[num].quote +
            "</p>" +
            '<footer><a href="' +
            quotes[num].link +
            '" target="_blank" class="brackets author">' +
            quotes[num].author +
            '</a><span class="cursor blink">&#9646;</span></footer>';
        }
        $("#" + num).addClass("opened");
        $tweet.html(
          '<a href="https://twitter.com/intent/tweet?text=' +
            quotes[num].quote +
            "-" +
            quotes[num].author +
            '" class="btn" target="_blank">Tweet Quote</a>'
        );
      } else {
        htmlOutput =
          '<div class="warning"><span>WARNING</span><p> No more fact about me<br>Please Look Down. <span class="cursor blink">&#9646;</span></p></div>';
      }
      //$element.html(htmlOutput);
      x++;
      return render();
    }
  
    output();
  
    var isTag, char, text;
  
    function render() {
      //console.log('i',i);
  
      text = htmlOutput.slice(0, i++);
  
      if (text === htmlOutput) return (i = 0);
  
      $element.html(text + "&#9646;");
  
      char = text.slice(-1);
  
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
  
      if (isTag) return render();
  
      return setTimeout(render, 20);
    }
  
    $("#newQuoteBtn").on("click", function () {
      output();
    });
  });
  