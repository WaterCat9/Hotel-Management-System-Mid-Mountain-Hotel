            if(this.classList.contains('btnselected')){
                this.classList.remove('btnselected')
            }else{
                const a=Array.from(document.querySelectorAll(".btnselected"));
                a.forEach(function(a){a.classList.remove('btnselected')});
                this.classList.add('btnselected');
            }