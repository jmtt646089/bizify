var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/renderHtml.ts
function renderHtml(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bizify</title>
        <link rel="stylesheet" type="text/css" href="https://static.integrations.cloudflare.com/styles.css">
      </head>
    
      <body>
        <header>
          <img
            src="https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/30e0d3f6-6076-40f8-7abb-8a7676f83c00/public"
          />
          <h1>Successfully connected to D1-Bizify</h1>
        </header>
        <main>
          <p>Your D1 Bizify Database contains the following data:</p>
          <pre><code><span style="color: #0E838F">&gt; </span>SELECT * FROM comments LIMIT 3;<br>${content}</code></pre>
          <small class="blue">
            <a target="_blank" href="https://developers.cloudflare.com/d1/tutorials/build-a-comments-api/">Build a comments API with Workers and D1</a>
          </small>
        </main>
      </body>
    </html>
`;
}
__name(renderHtml, "renderHtml");

// src/index.ts
var index_default = {

  async fetch(request, env) {

    //check if the request is authenticated

    //Home page before login
    console.log("homepage before login");
    //window is Browser API, now the Workers JS in running on Server
    //window.location.href = "https://www.google.com";
    //fetch(url) is also Browser API, different to Workers fetch
    //if works in front end code, but not in back end code like Workers, Node.js
    //so use Response directly
    
    //make a json str and object
    const jsonString = '{"name":"Bond", "age":30, "city":"Auckland"}';
    // Convert the JSON string into a JavaScript object
    //const jsObject = JSON.parse(jsonString);
    // Access values in the JavaScript object
    //console.log(jsObject.name);
    //console.log(jsObject["age"]);

    //make a response instance
    var haha = new Response(renderHtml(jsonString), {
      headers: {
        "content-type": "text/html"
      }
    });

    //return haha; //work
    //return haha.redirect //not work, instance of Response doesnot have redirect method

    //return Response.redirect("https://www.google.com");
    //now, we can do the if else to do the routing
    //index doing the routing
    //by constructing the first page with navigation menus
    //user click different menu to request different pages and services
    //so now it is show time of React and Next.js Server Side Rendering

    var menus = "<a href="+"https://www.huawei.com"+">Home</a>"+"|"+"<a href="+"https://www.google.com"+">Product</a>"+"|"+"<a href="+"https://www.github.com"+">Cart</a>"+"<a href="+"https://www.qq.com"+">Account</a>";
                //<a target="_blank" href="https://">Build a comments API with Workers and D1</a>

    function navigation(aa) {
      return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Bizify</title>
            <link rel="stylesheet" type="text/css" href="https://static.integrations.cloudflare.com/styles.css">
          </head>
        
          <body>
            <header>
              <img
                src="https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/30e0d3f6-6076-40f8-7abb-8a7676f83c00/public"
              />
              <h1>Successfully created front page of Bizify</h1>
            </header>
            <main>
              <p>here is navigation menu:</p>
              <p>${aa}</p>
              <small class="blue">
                <a target="_blank" href="https://developers.cloudflare.com/d1/tutorials/build-a-comments-api/">Build a comments API with Workers and D1</a>
              </small>
            </main>
          </body>
        </html>
    `;
    }

    var frontpage = new Response(navigation(menus), {
      headers: {
        "content-type": "text/html"
      }
    });

    return frontpage;
    //in each menu, link to a page/service.js

    //returned already
    //user click on the browser
    //then new link request sent to Cloudflare Workers js file, will be processed by the handler fetch(request, env, ctx)

    //Routing shall be done in different pages 
    console.log("routing table for users");

    //login
    console.log("login");
    //Register

    //Homepage after login

    //Product Page

    //Order

    //Payment

    //Success

    //Account page, Profile



    //Admin
    console.log("routes for admin");
    //CMS
    console.log("CMS to New Product");
    //Create New Product


    
    //the following table query and show, is just one of the routes
    //need login first
    const stmt = env.DB.prepare("SELECT * FROM orders LIMIT 3");
    const { results } = await stmt.all();
    console.log("haha");
    return new Response(renderHtml(JSON.stringify(results, null, 2)), {
      headers: {
        "content-type": "text/html"
      }
    });


  }


};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
