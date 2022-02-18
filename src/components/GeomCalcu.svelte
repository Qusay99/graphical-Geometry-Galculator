<script lang="ts">
    import { GeometryCalculator } from "./../calculator.ts";
    let surface = GeometryCalculator.square(5)
    console.log(surface)
    let answer = '';
    let a: number;
    let b: number;
    let z: number;
    let label1 = 'a';
    let label2 = 'b';
    let label3 = 'h';
    let requiredFields = ''; 
    let selected;
    let fieldStatus = "";
    let questions = [
		{ id: "rectangle", text: `Rechteck` },
		{ id: "square", text: `Quadrat` },
		{ id: "parallelogram", text: `Parallelogramm` },
		{ id: "cube", text: `Würfel` },
		{ id: "cuboid", text: `Quader` },
		{ id: "cylindersphere", text: `Zylinder` },
		{ id: "sphere", text: `Kugel` },
        
	];

    // if (selected == "square" || selected == "cube" || selected == "sphere")
    // {

    // }
    
    function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}

</script>


<div class="container-fluid">
    <div class="row row-edit">
        <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
        <div class="col-lg-6 col-md-6 form-container">
            <div class="input-fields">
                <!-- <h2>Fläche {surface}</h2> -->
                <div class="col-lg-8 col-md-12 col-sm-9 col-xs-12 mx-auto form-box text-center">
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Form</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="rectangle">Rechteck</option>
                            <option value="square">Quadrat</option>
                            <option value="parallelogram">Parallelogramm</option>
                            <option value="cube">Würfel</option>
                            <option value="cuboid">Quader</option>
                            <option value="cylindersphere">Zylinder</option>
                            <option value="sphere">Kugel</option>
                        </select>
                    </div>
                </div>
                <div class="input-group mx-auto mb-3">
                    <span class="input-group-text" id="basic-addon1">a</span>
                    <input type="text" class="form-control" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mx-auto mb-3">
                    <span class="input-group-text" id="basic-addon1">b</span>
                    <input type="text" class="form-control" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mx-auto mb-3">
                    <span class="input-group-text" id="basic-addon1">h</span>
                    <input type="text" class="form-control" aria-describedby="basic-addon1" disabled={fieldStatus}>
                </div>
                <div>
                    <button type="button" class="btn btn-danger" disabled={!answer}>Berechnen</button>
                </div>
                <div>
                    <form on:submit|preventDefault={handleSubmit}>
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Form</label>
                            <select class="form-select" value={selected} on:change="{() => answer = ''}">
                                {#each questions as question}
                                    <option value={question}>
                                        {question.text}
                                    </option>
                                {/each}
                            </select>
                        </div>
                        <div class="input-group mx-auto mb-3">
                            <span class="input-group-text" id="basic-addon1">a</span>
                            <input type="text" class="form-control" aria-describedby="basic-addon1" bind:value={a}>
                        </div>
                        <div class="input-group mx-auto mb-3">
                            <span class="input-group-text" id="basic-addon1">b</span>
                            <input type="text" class="form-control" aria-describedby="basic-addon1" bind:value={b}>
                        </div>
                        <div class="input-group mx-auto mb-3">
                            <span class="input-group-text" id="basic-addon1">h</span>
                            <input type="text" class="form-control" aria-describedby="basic-addon1" disabled={!b}  bind:value={z}>
                        </div>
                        <button disabled={!a} type=submit>
                            Submit
                        </button>
                    </form>
                    <p>selected question {selected ? selected.id : '[waiting...]'}</p>
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
    /* background: url('images/bg-red.jpg') center no-repeat; */
    background: url('images/math-bg2.png') center no-repeat;
    /* background-size:contain; */
    background-size: 80%;
    /* height: 100vh; */
    }
    .form-container{
        background-color: rgba(196, 196, 196, 0.8);
        justify-content: center;
    }
    .input-fields{
        margin-top: 25vh;
        padding-right: 10vw;
        padding-left: 10vw;
    }
    input[type=text]:disabled {
    background: #dddddd;
    }
</style>