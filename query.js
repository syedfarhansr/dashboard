<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function(){
        $(".hero").hover(
            function() {
                var imageSrc = $(this).data("image");
                $("#hero-image").attr("src", imageSrc);
                $(".hero-image").fadeIn();
            },
            function() {
                $(".hero-image").fadeOut();
            }
        );
    });
</script>