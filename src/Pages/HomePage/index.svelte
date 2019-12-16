<script>
    import { TweenLite, Power2 } from 'gsap';
    import { onMount } from 'svelte';
    import { AnimationHelper } from '@Helper';
    import man from '../../Assets/images/man.svg';
    import woman from '../../Assets/images/woman.svg';

    onMount(() => {
        AnimationHelper.introText.first();
        AnimationHelper.images.intro();
    });

    console.log(man);
</script>

<style src="./style.scss">

</style>

<div class="home">
    <div class="home__text-container">
        <img class="img-man" src={man} alt="" />
        <div class="text-3">SOCIALE</div>
        <img class="img-woman" src={woman} alt="" />
    </div>
    <!--  <div class="box-test" /> -->
</div>
