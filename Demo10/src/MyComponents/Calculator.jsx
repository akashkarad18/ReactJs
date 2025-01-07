import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export default function Calculator() {
    return (
        <>
            <div className='row container g-3 m-4 '>
                <div className='col col-md-6 col-sm-12  col-lg-4'>
                    <div className='border'>
                        box1
                    </div>
                </div>
                <div className='col col-md-6 col-sm-12 col-lg-4'>
                    <div className='border'>
                        box2
                    </div>
                </div>
                <div className='col col-md-6 col-sm-12 col-lg-4'>
                    <div className='border'>
                        box3
                    </div>
                </div>
                <div className='col col-md-6 col-sm-12  offset-lg-2     col-lg-4'>
                    <div className='border'>
                        box4
                    </div>
                </div>
                <div className='col offset-md-3 col-md-6 col-sm-12 offset-lg-0 col-lg-4 '>
                    <div className='border'>
                        box5
                    </div>
                </div>
            </div>
        </>
    )
}