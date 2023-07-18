import { useRouter } from 'next/router';

export default function ParkingSpace() {
    const router = useRouter();
    const data = router.query;
    const parking = JSON.parse(data.data);
    console.log(parking);
    return (
        <>
            <div className="container h-100">
                <div className="rounded-box mt-5 p-4">
                    <h1 className="text-center border-bottom pb-4">{parking.address}</h1>
                    <div className="row mt-3">
                        <div className="col-5">
                            <img src={parking.thumbnail} />
                        </div>
                        <div className="col-7 p-4">
                            <h4>Availability: {parking.availability}</h4>
                            <h4>Duration: {parking.duration_type} Term</h4>
                            <h4>Price: {parking.price}php/hr</h4>
                            <br />
                            <br />
                            <h5>
                                Date: <input type="date"></input>
                            </h5>
                            <div className="row">
                                <div className="col">
                                    <h5>
                                        Time in: <input type="time"></input>
                                    </h5>
                                </div>
                                <div className="col">
                                    <h5>
                                        Time out: <input type="time"></input>
                                    </h5>
                                </div>
                            </div>
                            <h5 className="text-right mt-5 mr-3">
                                <input className="btn btn-lg btn-primary" type="submit" value="Book" />
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}