Vue.component('hero-section', {
    data: function () { // best practice
        return {
            welcomeMessage: 'Welcome to Flexor'
        }
    },
    template: `
        <!-- ======= Hero Section ======= -->
    <section id="hero"
             class="d-flex flex-column justify-content-center align-items-center">
      <div class="container"
           data-aos="fade-in">
        <h1>{{ welcomeMessage }}</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <div class="d-flex align-items-center">
          <i class="bx bxs-right-arrow-alt get-started-icon"></i>
          <a href="#about"
             class="btn-get-started scrollto">Get Started</a>
        </div>
      </div>
    </section><!-- End Hero -->


    `
})