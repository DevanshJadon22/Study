//whenever we type an url in browser our browser automaticaaly sends request to that url and fetch the response and show us but if we want to do this using js then we have to fillow below stps;
const URL="https://cat-fact.herokuapp.com/facts";
//we have to use fetch API to fetch data from URL through js. for fetching data from URL we have to use fetch() method ,which gives us promise as output.
//when we write fetch(URL); this automatically sends an request to URL.
const getFacts=async()=>{
    console.log("getting data ....");
    let response=fetch(URL);
    console.log(response);//here the response is in json format.nowadaysmost of the apis return data in json format only.AJAJ
    let data=(await response).json();
    console.log(data);//this is a usable data(js object which we can use.)
};
//by default when we use fetch method we use it for using get() method/request only. and also in most of the cases we use it for get request only.
//whenever we send some request to api api sends us back the response in the json format.(json format is like jac=vascript object but actually not a js object),so we have to convert the json format response in js object for using it.
//for converting json format response into js object we use json() method which is also a asynchronous method and return a promise.