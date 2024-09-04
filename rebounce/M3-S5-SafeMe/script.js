$(function(){
    function Usuario(userName, userEmail, userJob, userPhone, userAboutMe) {
        this.name = userName
        this.email = userEmail
        this.job = userJob
        this.phone = userPhone
        this.about_me = userAboutMe

        this.displayUsers = () => {
            $("#user-information").append(`
        <div class="card mb-3" style="min-width: 38rem;">
        <div class="row g-0">
          <div class="col-md-4 bg-warning text-center">
            <img src="..." class="img-fluid rounded-start" alt="imagen de usuario">
            <h5 id="display-name">${this.name}</h5>
            <p id="display-job">${this.job}</p>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">Informacion</h4>
              <div class="row d-flex">
                <div class="col-6">
                <h5>Email</h5>
                <span class="card-text col-6">${this.email}</span>
                </div>
                <div class="col-6">
                <h5>Phone</h5>
                <span class="card-text col-6">${this.phone}</span>
                </div>
              </div>
              <div class="user-about-me">
                <h5>Sobre Mi</h5>
                <p>${this.about_me}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
        }
    }

    //un evento clik con btn "enviar"
    $("#btn-send").on("click",() => {
        $("#user-information").html("")
        let userName = $("#txt-name").val()
        let userEmail = $("#txt-email").val()
        let userJob = $("#txt-job").val()
        let userPhone = $("#txt-phone").val()
        let userAboutMe = $("#txt-about-you").val()
        console.log("Nuestros datos a trabajar son: , ", userName, userEmail, userJob, userPhone, userAboutMe)

        const newUser = new Usuario(userName, userEmail, userJob, userPhone, userAboutMe)
        console.log(newUser.name)
        newUser.displayUsers()
        $('#form-users')[0].reset();
        
    })
})