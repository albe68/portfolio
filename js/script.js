	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }


  

    // function validateform(){  
    //     var username=document.getElementById('name');
    //     var message=document.getElementById('message');
    //     const min=3;
        
    //     if (username =="" || username==Number || message ==""){  
    //       alert("Name can't be blank");  
    //       return false;  
    //     }
    //       else {
    //         alert("Send Succsess");
    //       }

    //     }  

    function namecheck()
    {
        let name=document.getElementById("name").value
        let nm=null
         nm = name.trim()
       var letters = /^[A-Za-z]+$/;
       var spc=/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
        document.getElementById("name").value = nm;
        if(nm==""||name==null)
        {
            document.getElementById("nmlabel").style.display="block"
            return false
        }
        else if(!isNaN(nm[0]))
        {
            document.getElementById("nmlabel").style.display="none"
            document.getElementById("nmlabel-01").style.display="block"
            return false
        }
        else if(nm.match(spc))
        {
            document.getElementById("nmlabel").style.display="none" 
            document.getElementById("nmlabel-01").style.display="none"  
            document.getElementById("nmlabel-02").style.display="block"
            return false
        }
        else{
            document.getElementById("nmlabel").style.display="none" 
            document.getElementById("nmlabel-01").style.display="none" 
            document.getElementById("nmlabel-02").style.display="none"
            return true
    
        }
    }
    
    
    function emailcheck()
    {
        var val=document.getElementById("email").value
        var v=null
         v = val.trim()
        document.getElementById("email").value = v;
        if(v==""||val==null)
        {
            document.getElementById("el").style.display="block"
            return false
        }
        else if(!isNaN(v[0]))
        {
            document.getElementById("el-01").style.display="block"
            return false
        }
    
    
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v))
      {
        document.getElementById("el-02").style.display="block"
        return false
      }
        // alert("You have entered an invalid email address!")
        // return (false)
    
    
    
    
    
        else{
            document.getElementById("el").style.display="none" 
            document.getElementById("el-01").style.display="none"
            document.getElementById("el-02").style.display="none" 
            return true
    
        }
    }
    
    function msgcheck()
    {
    
        var val=document.getElementById("msg").value
        var v=null
         v = val.trim()
        document.getElementById("msg").value = v;
        var n=v.length
        console.log(n)
        if(v==""||val==null)
        {
            document.getElementById("ml").style.display="block"
            return false
        }
        else if(50>=n)
        {
            console.log(v.length)
            document.getElementById("ml-01").style.display="block"  
            return false      
        }
        else{
            document.getElementById("ml").style.display="none" 
            document.getElementById("ml-01").style.display="none"   
            return true
    
        }
    }
      
