<script lang="ts">
    import { GeometryCalculator } from "./../calculator.ts";

    let answer = '';
    let a: number;
    let b: number;
    let h: number;
    let label1 = 'a';
    let label2 = 'b';
    let label3 = 'h';
    let enabled_a = true; 
    let enabled_b = false; 
    let enabled_h = false; 
    let requiredFields = ''; 
    let selected;
    let fieldStatus = "";
    let result = "";
    let questions = [
		{ id: "square", text: `Quadrat` },
		{ id: "rectangle", text: `Rechteck` },
		{ id: "parallelogram", text: `Parallelogramm` },
		{ id: "cube", text: `Würfel` },
		{ id: "cuboid", text: `Quader` },
		{ id: "cylinder", text: `Zylinder` },
		{ id: "sphere", text: `Kugel` },
        
	];

    function handleChange(){
        result = '';
        if (selected.id == "square" || selected.id == "cube" || selected.id == "sphere")
        {
            enabled_a = true;
            enabled_b = false;
            enabled_h = false;
            if (selected.id == "sphere")
            {
                label1 = 'r'
                label2 = 'b';
                label3 = 'h';
            }
            else{
                label1 = 'a';
                // label2 = 'b';
                // label3 = 'h';
            }
        }   
        else if (selected.id == "rectangle" || selected.id == "cylinder")
        {
            enabled_a = true;
            enabled_b = true;
            enabled_h = false;
            if (selected.id == "cylinder")
            {
                label1 = 'r';
                label2 = 'h';
                label3 = '-';
            }
            else{
                label1 = 'a';
                label2 = 'b';
                label3 = 'h';
            }
        }
        else if (selected.id == "parallelogram" || selected.id == "cuboid")
        {
            enabled_a = true;
            enabled_b = true;
            enabled_h = true;
        }
    }

    function handleClick() {
        if (selected.id == "square" || selected.id == "cube" || selected.id == "sphere")
        {   
            enabled_a = true
            if (selected.id == "square"){
                result = GeometryCalculator.square(a)
            }
            else if (selected.id == "cube"){
                result = GeometryCalculator.cube(a)
            }
            else if (selected.id == "sphere"){
                result = GeometryCalculator.sphere(a)
            }
        }
        else if (selected.id == "rectangle" || selected.id == "cylinder")
        {
            if (selected.id == "rectangle"){
                result = GeometryCalculator.rectangle(a,b)
            }
            else if (selected.id == "cylinder"){
                result = GeometryCalculator.cylinder(a,b)
            }
        }
        else if (selected.id == "parallelogram" || selected.id == "cuboid")
        {
            if (selected.id == "parallelogram"){
                result = GeometryCalculator.parallelogram(a,b,h)
                
            }
            else if (selected.id == "cuboid"){
                result = GeometryCalculator.cuboid(a,b,h)
            }
        }

    // checking the error reason for NaN results
    // if (result == "")
        
	}

 
</script>

 
<div class="container-fluid">
    <div class="row row-edit">
        <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
        <div class="col-lg-6 col-md-6 form-container">
            <div class="input-fields justify-content-center">
                <form>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Form</label>
                        <!-- <select class="form-select" bind:value={selected} on:change="{() => result = ''}" > -->
                        <select class="form-select" bind:value={selected} on:change={handleChange} >
                            {#each questions as question}
                                <option value={question}>
                                    {question.text}
                                </option>
                            {/each}
                        </select>
                    </div>
                    <div class="input-group mx-auto mb-3">
                        <span class="input-group-text" id="basic-addon1">{label1}</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" disabled={!enabled_a} bind:value={a}>
                    </div>
                    <div class="input-group mx-auto mb-3">
                        <span class="input-group-text" id="basic-addon1">{label2}</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" disabled={!enabled_b} bind:value={b}>
                    </div>
                    <div class="input-group mx-auto mb-3">
                        <span class="input-group-text" id="basic-addon1">{label3}</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" disabled={!enabled_h}  bind:value={h}>
                    </div>
                </form>
                <div class="center-content">
                    <button class="btn btn-danger mx-auto" disabled={!a} type=submit on:click={handleClick}>
                        Berechnen
                    </button>
                    <p class="mt-5">{@html result}</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .container-fluid, .row-edit{
        height: 100%;
    }
    .image-container{
        background: url('./images/math-bg2.png') center no-repeat;
        background-size: 80%;
    }
    .form-container{
        background-color: rgba(196, 196, 196, 0.8);
        justify-content: center;
    }
    .input-fields{
        margin-top: 30vh;
        padding-right: 10vw;
        padding-left: 10vw;
    }
    .center-content{
        text-align: center;
    }
    /* input[type=text]:disabled {
    background: #dddddd;
    } */
</style>