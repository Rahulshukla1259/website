
//window.addEventListener()




$(document).ready(() => {
  $(".signup").click(() => {
    $("p").css("opacity", 0.1);

    let div = document.createElement("div");

    div.innerHTML = `<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="logo.jpeg" alt="Your Company">
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="-space-y-px rounded-md shadow-sm">
            <div>
            <label for="email-address" class="sr-only">Name</label>
            <input id="name" name="name" type="name" autocomplete="name" required class=" signupname relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter name here">
            
            </div>
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
      
              <div class="text-sm mx-2">
                <a href="/main.html" class="font-medium text-grey-600 hover:text-blue-900">Forgot your password?</a>
              </div>
            </div>
      
            <div>
              <button type="submit" class=" signupbtn group bg-slate-800 relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>`;

    $(".loginout").html(" ");

    $(".loginout").append(div);

    let name;

    $(".signupbtn").click(() => {
      name = $(".signupname").val();

      console.log(name);

      $(".loginout").html(" ");

      let img = document.createElement("img");
      img.src =
        "https://tse3.mm.bing.net/th?id=OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU&pid=Api&P=0";

      img.style.width = "28px";
      img.style.height = "28px";

      img.style.borderRadius = "50%";

      img.style.marginLeft = "30px";

      img.style.marginTop = "3px";

      img.classList.add("userimg");

      $("nav").append(img);

      $("p").css("opacity", 1);

      $(".userimg").mouseover(() => {
        let select = document.createElement("select");

        select.style.position = "relative";

        select.style.backgroundColor = "grey";

        select.style.width = "10px";

        select.classList.add("my-4");

        select.style.height = "10px";

        select.style.borderRadius = "50%";

        select.classList.add("text-xs");

        let option = document.createElement("option");

        option.innerText = `Hey ${name}`;

        select.append(option);

        if (document.querySelector(".nav").alreadyHas) {
          document.querySelector(".nav").removeChild(select);
        } else {
          $("nav").append(select);
        }
      });
    });
  });

  $(".signup").mouseover(() => {
    $(".signup").addClass("background");
  });

  $(".signup").mouseleave(() => {
    $(".signup").removeClass("background");
  });

  $(".signin").click(() => {
    $("p").css("opacity", 0.1);

    let div = document.createElement("div");

    div.innerHTML = `<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="logo.jpeg" alt="Your Company">
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
      
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="group  bg-slate-800 relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>`;

    $(".loginout").html(" ");

    $(".loginout").append(div);
  });

  $(".signin").mouseover(() => {
    $(".signin").addClass("background");
  });

  $(".signin").mouseleave(() => {
    $(".signin").removeClass("background");
  });

  $(".toggle").click(() => {
    $("body").toggleClass("bodyback");

    

    

  });

  //MathJax.startup.document.getMathItemsWithin(document.body);

  //all calculators icon here

  $(".calculator").click(() => {
    $(".section2")
      .html(`<center><h1  class="text-5xl mx-96 font-bold font-sans h1text ">Your Calculators here</h1></center>

  
     <div style="display:"flex" class="flex my-10 flex-wrap">

     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="cal factorize content-center text-center mx-4 cursor-pointer  border-r-amber-800 my-4"><h2  class="text-3xl mx-14 py-7 cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px; color: rgb(10, 38, 38);">Factorize</h2></div>

     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="  my-4 mx-4 cal  derivative content-center text-center cursor-pointer  border-r-amber-800"><h2 class="text-3xl mx-14 py-7 cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px; color: rgb(10, 38, 38);">Derivative</h2></div>

     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="cal mx-4 my-4  text-center cursor-pointer  border-r-amber-800"><h2 class="text-3xl mx-14 py-7 integral cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px;color: rgb(10, 38, 38);">Integrate</h2></div>

     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="cal mx-4 my-4  text-center zero cursor-pointer  border-r-amber-800"><h2 class="text-3xl mx-14 py-7 cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px; color: rgb(10, 38, 38);">Zero's</h2></div>

     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="cal mx-4 my-4  text-center tangentcalculation cursor-pointer  border-r-amber-800"><h2 class="text-3xl mx-14 py-7 cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px; color: rgb(10, 38, 38);">Tangent</h2></div>

     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="cal mx-4 my-4  text-center cursor-pointer  border-r-amber-800"><h2 class="text-3xl mx-14 py-7 cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px;color: rgb(10, 38, 38);">Area </h2></div>
     
     
     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="cal mx-4 my-4  text-center cursor-pointer  border-r-amber-800"><h2 class="text-3xl mx-14 py-7 cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px;color: rgb(10, 38, 38);">Area </h2></div>

     <div style="height: 110px; width: 270px; background: linear-gradient(rgb(245, 157, 157),rgb(156, 156, 175),rgb(240, 240, 150)); box-shadow: cadetblue; border-radius: 6px;" class="cal mx-4 my-4  text-center cursor-pointer  border-r-amber-800"><h2 class="text-3xl mx-14 py-7 cursor-pointer font-sans font-extrabold " style="height: 20px; width: 30px;color: rgb(10, 38, 38);">Determinant </h2></div>
     
     
     
     </div>`);

     $(".toggle").click(() => {
      
  
      
  
      $(".h1text").toggleClass("togglecolor");
  
    });

    // factor calculation

    $(".factorize").click(() => {
      $(".section2").html(`<div class="mx-80 my-16">
      
      <h1 class="text-5xl font-bold mx-42 my-4"> Calculate Factor here </h1>

      <hr style="color:"cyan">
      
      <input class="px-3 expfactor my-8" style="width: 30vw; height: 6vh; color: rgb(38, 22, 2); font-weight: 600; border-color: darkcyan; border-radius: 4px;" size="80" placeholder="Your expression here" type="text">

      <input class="w-24 factorbtn" style="height: 6vh; background-color: cadetblue; border-radius: 4px;" type="button" value="factor">
       <h3 class="w-9 my-6 text-2xl font-bold factorresulttag" style="color: rgb(1, 57, 57); margin-left: 12vw; ">Result</h3>
      <div style="height: 15vh; width: 40vw; background-color: bisque; border-radius: 4px; margin-top: 14px;justify-content: center;padding-top: 10px;
      padding-left: 30px;" class="factorresult"></div>
  
  
       </div>`);

      //factor start

      $(".factorbtn").click(() => {

        let text="Calculating"

        let interval=setInterval(()=>{

          text=text+"."

          if(text==="Calculating...."){

            text="Calculating"
          }

          $(".factorresulttag").text(text)


        },200)
        let exp = document.querySelector(".expfactor").value;

        let EncodedValue = encodeURIComponent(exp);

        let url = `https://newton.now.sh/api/v2/factor/${EncodedValue}`;

        fetch(url)
          .then((respose) => {
            return respose.json();
          })
          .then((res) => {
            let result = document.querySelector(".factorresult");

            result.innerText = "";

            let parsedvalue = math.parse(res.result);

            let texvalue = parsedvalue.toTex();

            MathJax.texReset();

            let options = MathJax.getMetricsFor(result);

            MathJax.tex2chtmlPromise(texvalue, options).then(function (node) {
              result.appendChild(node);

              
              clearInterval(interval)

              $(".factorresulttag").text("Result")
              MathJax.startup.document.clear();
              MathJax.startup.document.updateDocument();
            });
          });
      });

    })
      //factor end

      //derivative calculation start

      $(".derivative").click(() => {
        $(".section2").html(`<div class="mx-80 my-16">
        
        <h1 class="text-5xl font-bold mx-42 my-4"> Calculate Derivative here </h1>
  
        <hr style="color:"cyan">
        
        <input class="px-3 expfactor my-8" style="width: 30vw; height: 6vh; color: rgb(38, 22, 2); font-weight: 600; border-color: darkcyan; border-radius: 4px;" size="80" placeholder="Your expression here" type="text">
  
        <input class="w-24 factorbtn" style="height: 6vh; background-color: cadetblue; border-radius: 4px;" type="button" value="calculate">
         <h3 class="w-9 my-6 text-2xl font-bold" style="color: rgb(1, 57, 57); margin-left: 12vw; "><span  class="deriveresult">Result</span><img class="my-6 bg-none spinner" style="height:34px; width:70px;" src="./spinner.gif"/></h3>
        <div style="height: 15vh; width: 40vw; background-color: bisque; border-radius: 4px; margin-top: 14px;justify-content: center;padding-top: 10px;
        padding-left: 30px;" class="factorresult"></div>
    
    
    </div>`);
           $(".spinner").hide()
           $(".deriveresult").show()
        $(".factorbtn").click(() => {
          $(".spinner").show()

          $(".deriveresult").hide()

          let exp = document.querySelector(".expfactor").value;

          let EncodedValue = encodeURIComponent(exp);

          let url = `https://newton.now.sh/api/v2/derive/${EncodedValue}`;

          fetch(url)
            .then((respose) => {
              return respose.json();
            })
            .then((res) => {

              console.log(res)
              let result = document.querySelector(".factorresult");

              result.innerText = "";
            
              let parsedvalue = math.parse(res.result);

              let texvalue = parsedvalue.toTex();

              MathJax.texReset();

              let options = MathJax.getMetricsFor(result);

              MathJax.tex2chtmlPromise(texvalue, options).then(function (node) {
                result.appendChild(node);
                $(".spinner").hide()

          $(".deriveresult").show()
                MathJax.startup.document.clear();
                MathJax.startup.document.updateDocument();
              });
            });
        });
      
       
      
    });

    //deriative calculation end

    //integral calculation start

    $(".integral").click(() => {
      $(".section2").html(`<div class="mx-80 my-16">
      
      <h1 class="text-5xl font-bold mx-42 my-4"> Calculate Integral here </h1>

      <hr style="color:"cyan">
      
      <input class="px-3 expfactor my-8" style="width: 30vw; height: 6vh; color: rgb(38, 22, 2); font-weight: 600; border-color: darkcyan; border-radius: 4px;" size="80" placeholder="Your expression here" type="text">

      <input class="w-24 factorbtn" style="height: 6vh; background-color: cadetblue; border-radius: 4px;" type="button" value="integrate">
       <h3 class="w-9 my-6 text-2xl font-bold" style="color: rgb(1, 57, 57); margin-left: 12vw; ">Result</h3>

       <img class="my-6 bg-none spinner" style="height:34px; width:60px; margin-left:160px" src="./spinner.gif"/>
      <div style="height: 15vh; width: 40vw; background-color: bisque; border-radius: 4px; margin-top: 14px;justify-content: center;padding-top: 10px;
      padding-left: 30px;" class="factorresult"></div>
  
  
  </div>`);
          $(".spinner").hide();
      $(".factorbtn").click(() => {

        $(".spinner").show();
        let exp = document.querySelector(".expfactor").value;

        let EncodedValue = encodeURIComponent(exp);

        let url = `https://newton.now.sh/api/v2/integrate/${EncodedValue}`;

        fetch(url)
          .then((respose) => {
            return respose.json();
          })
          .then((res) => {

            console.log(res)
            let result = document.querySelector(".factorresult");

            result.innerText = "";

            let parsedvalue = math.parse(res.result);

            let texvalue = parsedvalue.toTex();

            MathJax.texReset();

            let options = MathJax.getMetricsFor(result);

            MathJax.tex2chtmlPromise(texvalue, options).then(function (node) {

              console.log(node)

              


              result.appendChild(node);
              MathJax.startup.document.clear();
              MathJax.startup.document.updateDocument();
              $(".spinner").hide();
            });
          });
      });
    
     
    
  });



    //integral calculation end


    //zeros calculation start

    $(".zero").click(() => {
      $(".section2").html(`<div class="mx-80 my-16">
      
      <h1 class="text-5xl font-bold mx-42 my-4"> Calculate Zero's here </h1>

      <hr style="color:"cyan">
      
      <input class="px-3 expfactor my-8" style="width: 30vw; height: 6vh; color: rgb(38, 22, 2); font-weight: 600; border-color: darkcyan; border-radius: 4px;" size="80" placeholder="Your expression here" type="text">

      <input class="w-24 factorbtn" style="height: 6vh; background-color: cadetblue; border-radius: 4px;" type="button" value="calculate">
       <h3 class="w-9 zeroresult my-6 text-2xl font-bold" style="color: rgb(1, 57, 57); margin-left: 12vw; ">Result</h3>

       
      <div style="height: 15vh; width: 40vw; background-color: bisque; border-radius: 4px; margin-top: 14px;justify-content: center;padding-top: 10px;
      
      padding-left: 30px;" class="factorresult"></div>
  
  
  </div>`);

      $(".factorbtn").click(() => {

        let text="Calculating"

        let interval=setInterval(()=>{

          text=text+"."

          if(text==="Calculating...."){

            text="Calculating"
          }

          $(".zeroresult").text(text)
        },250)
        let exp = document.querySelector(".expfactor").value;

        let EncodedValue = encodeURIComponent(exp);

        let url = `https://newton.now.sh/api/v2/zeroes/${EncodedValue}`;

        fetch(url)
          .then((respose) => {
            return respose.json();
          })
          .then((res) => {

            console.log(res)
            let result = document.querySelector(".factorresult");

            result.innerText = "";

            console.log(typeof res.result)



            let zero=[...res.result]

            console.log(zero)

            zero=zero.toString()

            

            if(zero===","){

              result.innerText = "No real zero found";
            } else{

              

              MathJax.texReset();

            let options = MathJax.getMetricsFor(result);

            MathJax.tex2chtmlPromise(zero, options).then(function (node) {
              result.appendChild(node);
              clearInterval(interval)
              $(".zeroresult").text("Result")
              MathJax.startup.document.clear();
              MathJax.startup.document.updateDocument();
            });

            }

            
          });
      });
    
     
    
  });

    //zeros calculation end

    //tangent calculation start here 

    $(".tangentcalculation").click(() => {
      $(".section2").html(`<div class="mx-80 my-16">
      
      <h1 class="text-5xl font-bold mx-28 my-4"> Calculate Tangent equation here </h1>

      <hr style="color:"cyan">
      
      <input class="px-3 expfactor my-8" style="width: 30vw; height: 6vh; color: rgb(38, 22, 2); font-weight: 600; border-color: darkcyan; border-radius: 4px;" size="80" placeholder="Your expression here" type="text">

      <input class="px-3 exp-x-value my-2" style="width: 10vw; height: 6vh; color: rgb(38, 22, 2); font-weight: 600; border-color: darkcyan; border-radius: 4px;" size="20" placeholder="Enter x value" type="text">

      <input class="w-24 factorbtn" style="height: 6vh; background-color: cadetblue; border-radius: 4px;" type="button" value="Calculate">
       <h3 class="w-9 my-6 tangentresulttag text-2xl font-bold" style="color: rgb(1, 57, 57); margin-left: 17vw; ">Result</h3>

       
      <div style="height: 15vh; width: 45vw; background-color: bisque; border-radius: 4px; margin-top: 14px;justify-content: center;padding-top: 10px;
      padding-left: 30px;" class="factorresult flex"></div>
  
  
  </div>`);
          
      $(".factorbtn").click(() => {

        let text="Calculating"

        let interval=setInterval(()=>{

          text=text+"."

          if(text==="Calculating...."){

            text="Calculating"
          }

          $(".tangentresulttag").text(text)


        },200)

        
        let exp = document.querySelector(".expfactor").value;

        let xvalue=document.querySelector(".exp-x-value").value

        let EncodedValue = encodeURIComponent(exp);

        let url = `https://newton.now.sh/api/v2/tangent/${xvalue}|${EncodedValue}`;

        fetch(url)
          .then((respose) => {
            return respose.json();
          })
          .then((res) => {

            console.log(res)
            let result = document.querySelector(".factorresult");

            

            let parsedvalue = math.parse(res.result);

            let texvalue = parsedvalue.toTex();

            MathJax.texReset();

            let options = MathJax.getMetricsFor(result);

            MathJax.tex2chtmlPromise(texvalue, options).then(function (node) {

              console.log(node)

              clearInterval(interval)

              $(".tangentresulttag").text("Result")



              result.innerHTML =`<span class="mt-2" style="margin-top:"12px"">y=</span>`;

              


              result.appendChild(node);
              MathJax.startup.document.clear();
              MathJax.startup.document.updateDocument();
              
            });
          });
      });
    
     
    
  });



    //tangent calculation end here

    //area calculation starts here 

    //area calculation end here

    //determinant start here

    //determinat end here


  });
});



function option1() {
  $(".option1").css("background-color", "green");

  $(".option2").css("background-color", "transparent");
  $(".option3").css("background-color", "transparent");
}

function option2() {
  $(".option2").css("background-color", "red");

  $(".option1").css("background-color", "transparent");
  $(".option3").css("background-color", "transparent");
}

function option3() {
  $(".option3").css("background-color", "red");

  $(".option1").css("background-color", "transparent");
  $(".option2").css("background-color", "transparent");
}

//blog code start here

$(".blogs").click(()=>{

  //blog1  start here

  
let heading1="AM-GM inequality"
  
  
  

  let blogtemplate=`<div style="height:300px ;width:400px; border-radius: 8px;" class="template mx-2 my-2">
  <h1 class="text-m text-center font-bold" style="position:absolute ; margin-left: 70px; margin-top: 20px; ">${heading1}</h1>
  <p class="font-semibold" style="position:absolute ; margin-top:90px; width: 380px; margin-left: 20px;">here AM-GM inequality is given for 2 numbers a,b

  that is    (a+b)/2>=sqrt(ab) </p>

  <a href="./blog.html"><button class="mx-16 bg-center blogbtn" style="position:absolute ; margin-top:220px; margin-left: 130px; height: 30px; width: 100px; border-radius: 4px;background-color: darkblue;color: rgb(244, 248, 248); z-index: 2; ">Read more</button></a>
  <img style="opacity:0.5 ; border-radius: 8px;" src="https://tse2.mm.bing.net/th?id=OIP.9veUxVTXRaMO7Ha7pABpVAHaE8&pid=Api&P=0" alt="">

</div>`

  $(".section2").html(`${blogtemplate}`)

 

  // blog1 end here


})

//blog end here

//content start here



//content end here


