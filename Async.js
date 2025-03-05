// Asynchronous JavaScript
    // callback functions based
        // callback based async code :- 
            // setTimeout(callback, time[delay])

            // console.log("start");

            // setTimeout(()=>{
            //     console.log("setTimeout");
            // },3000);

            // console.log("end");

            // setInterval(fun, delay):-
            // let count=0;

            // let val = setInterval(()=>{
            //     console.log(count);
            //     count++;

            //     // if(count>5){
            //     //     clearInterval(val);
            //     // }
            //     if(count==10){
            //         clearTimeout(val);
            //     }
            // },1000);

        // callback hell :-
            // setTimeout(() => {
            //     console.log("setTimeout 1");
            //     setTimeout(() => {
            //         console.log("setTimeout 2");
            //         setTimeout(() => {
            //             console.log("setTimeout 3");
            //             setTimeout(() => {
            //                 console.log("setTimeout 4");
            //                 setTimeout(() => {
            //                     console.log("settimeout 5");
            //                 }, 2000);
            //             }, 2000);
            //         }, 2000);
            //     }, 2000);
            // }, 2000);
            
    // promises based :- it is an proxy/placeholder value that will eventually come after the operation?
        // promise state -> resolve(fulfilled), reject(failed), pending, settled(fulfilled/rejected)

        // promise result -> 
        // create promise?
            // let promise = new Promise((resolve, reject) => {
            
            //     // reject("it is rejected");

            // resolve("it is resolved");
            // }).then((res1)=>{
            //     console.log(res1);
            // })
            // console.log(promise);

        // .then() -> when fulfilled 
        // .catch() -> when rejected

        // let p = function createOrder(){
        //     return new promise 
        // }

        // p.then(()=>{
        //     dopayment();
        // })

        // promise chaining?
            // let p = new Promise((resolve,reject)=>{
            //     resolve("success");
            // }) 

            // p.then((res)=>{
            //     console.log(res);
            // }).then((res)=>{
            //     console.log(res);
            // })

            // function asyncOP(isSuccess){
            //     return new Promise((resolve, reject)=>{
            //         setTimeout(()=>{
            //             if(isSuccess) resolve("success");
            //             else reject("fail"); 
            //         })
            //     })
            // }

            // asyncOP(true).then((messege)=>{
            //     console.log("then 1---",messege);
            //     return "result of then 1";
            // }).then((messege)=>{
            //     console.log("then 2---",messege);
            // }).then((messege)=>{
            //     console.log("then 3---",messege);
            // }).catch((error)=>{
            //     console.log("error---",error);
            // }).finally(()=>{
            //     console.log("finally this runs");
            // })
        
        // promofication :-conversion of a function that takes a callback to a function that returns a promise

        // two static ways to create promise
            // const p2 = Promise.resolve("success");
            // p2.then((res)=>console.log(res));

            // const p3 = Promise.reject("fail");
            // p3.catch((err)=>console.log(err));

            // new Promise((resolve, reject)=>{
            //     setTimeout(()=>{
            //         resolve(1);
            //     },5000);
            // }).then((result)=>{
            //     console.log("first then--",result);
            //     return new Promise((resolve, reject)=>{
            //         setTimeout(()=>resolve(result*3),2000);
            //     });
            // }).then((res)=>{
            //     console.log("second then--",res);
            //     return new Promise((resolve, reject)=>{
            //         setTimeout(()=>{
            //             resolve(res*2);
            //         },2000)
            //     })
            // }).then((res)=>{
            //     console.log("third then--",res);
            //     return res*2;
            // })

            // const p1 = new Promise((resolve, reject)=>{
            //         resolve(1);
            // }); 

            // const p2 = new Promise((resolve, reject)=>{
            //     resolve(2);
            // });

            // const p3 = new Promise((resolve, reject)=>{
            //     resolve(3);
            // });

            // const p4 = new Promise((resolve, reject)=>{
            //     resolve(4);
            //     p2.then((res)=>console.log(res)).then(()=>{
            //         p3.then((res)=>console.log(res));
            //     })
            // });
            // p1.then((res)=>console.log(res));
            // p4.then((res)=>console.log(res));

        // promise methods :-
            // promise.all():- it either return all or first rejected promise
                // const p1 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         reject(1);
                //     },2000);
                // })
                // const p2 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         resolve(2);
                //     },5000);
                // })
                // const p3 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         resolve(3);
                //     },3000);
                // })

                // Promise.all([p1,p2,p3]).then((res)=>console.log(res))
                //     .then((res)=>console.log(res))
                //     // .catch((err)=>console.log(err));

            // promise.race() :- it return the first settled promise
                // const p1 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         reject(1);
                //     },5000);
                // })
                // const p2 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         resolve(2);
                //     },6000);
                // })
                // const p3 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         // resolve(3);
                //     },3000);
                // })

                // Promise.race([p1,p2,p3])
                //     .then((res)=>console.log(res))
                //     .catch((err)=>console.log(err));

            // promise.any() :- it return the first fulfilled promise 
                
                // const p1 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         reject(1);
                //     },5000);
                // })
                // const p2 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         reject(2);
                //     },6000);
                // })
                // const p3 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         resolve(3);
                //     },10000);
                // })

                // Promise.any([p1,p2,p3])
                //     .then((res)=>console.log(res))

            // promise.allSettled() :- it return all promises whether fulfilled or rejected
                // const p1 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         reject(1);
                //     },5000);
                // })
                // const p2 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         reject(2);
                //     },6000);
                // })
                // const p3 = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         resolve(30);
                //     },10000);
                // })

                // Promise.allSettled([p1,p2,p3])
                //     .then((res)=>console.log(res))

                // console.log(1);
                // setTimeout(()=>{
                //     console.log(2);
                // },10);

                // setTimeout(()=>{
                //     console.log(3);
                // },0);

                // new Promise((resolve,reject)=>{
                //     console.log(4);
                //     resolve(5);
                //     console.log(6);
                // })
                    // .then(()=>console.log(7))
                    // .catch(()=>console.log(8))
                    // .then(()=>console.log(9))
                    // .catch(()=>console.log(10))
                    // .then(()=>console.log(11))
                    // .finally(()=>console.log(12));
            
                // console.log(13);

                // new Promise((resolve,reject)=>{
                //     resolve(2);
                //     reject(3);
                // })
                // .then((res)=>console.log(res))
                // .catch((err)=>console.log(err))
            
    // async/await :- 
        
        // async ->when you put async keywword in front of function then it will return you a promise
            // async function x(){
            //     return "1";
            // }
            // let p = x();
            // console.log(p);

            // p.then((res)=>console.log(res));

        // await -> can only use inside async function
        // this will make js engine wait so that promise can get settled

            // async function a(){
            //     console.log("start");
            //     let promise = new Promise(((resolve,reject)=>{
            //         setTimeout(()=>{
            //             resolve(1);
            //         },3000);
            //     }))
            //     let result = await promise;
            //     console.log("after await");
            //     console.log(result);
            // }
            // a();

            async function a(){
                try{
                    return await Promise.reject(1);
                }catch(err){
                    console.log(err);
                }
            }

            async function b(){
                try{
                    return Promise.reject(2);
                }catch(err){
                    console.log(err);
                }
            }

            async function c(){
                await a();
                await b();
            }
            c();