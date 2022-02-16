<script>
    let fieldStatus = ""

</script>
<div class="container-fluid">
    <div class="row row-edit">
        <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
        <div class="col-lg-6 col-md-6 form-container">
            <div class="input-fields">
                <div class="col-lg-8 col-md-12 col-sm-9 col-xs-12 mx-auto form-box text-center">
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="rectangle">Rechteck</option>
                            <option value="square">Quadrat</option>
                            <option value="parallelogram">Parallelogramm</option>
                            <option value="cube">Quader?</option>
                            <option value="cuboid">Würfel?</option>
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
                    <input type="text" class="form-control" aria-describedby="basic-addon1" disabled="{fieldStatus}">
                </div>
                <div>
                    <button type="button" class="btn btn-danger">Berechnen</button>
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