var app = new Vue({
    el: '#userapp',
    data: {
        userName:'hsshsh',
        userEmail:'',
        userCountry:'',
        userBirthdate:'',
        userAge:'',
        userPicLarge:'',
        userPicThumb:''
        },

        created() {
            this.fetchUser();
        },

        methods: {
            selectStudent(s) {
                console.log("Clicked", s);
                if(this.selectedStudent == s) {
                    return;
                }


                this.selectedStudent = s;
                this.offers = [];
                this.fetchOfferData(s);
            }
            fetchStudent: function() {
                fetch('/api/student/')
                .then(response => response.json())
                .then(data => {
                    this.students = parsedJson
                //     var userinfo = data.results[0];
                //     console.log(userinfo);
                //     this.userName = userinfo.name.first + " " + userinfo.name.last;
                //     this.userEmail = userinfo.email;
                //     this.userCountry = userinfo.location.country;
                //     this.userBirthdate = userinfo.dob.date[0] + userinfo.dob.date[1] + userinfo.dob.date[2] + userinfo.dob.date[3] + "/" + userinfo.dob.date[4] + userinfo.dob.date[5] + "/" + userinfo.dob.date[6] + userinfo.dob.date[7];
                //     this.userAge = userinfo.dob.age;
                //     this.userPicLarge = userinfo.picture.large;
                //     this.userPicThumb = userinfo.picture.thumbnail;
                });
            }
        }
    })
