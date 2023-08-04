import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPesoSign, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ParkingSpotCard = (props) => {
    const user_type = props.user_type;
    const id = props.id;
    const url = props.url;
    const thumbnail = props.thumbnail;
    const address = props.address;
    const rate = props.rate;
    const time_start = props.time_start;
    const time_end = props.time_end;

    return (
        <div className="col-3 my-4 d-flex align-items-center">
            <Link
                className="parking-spot-card text-truncate inline-block rounded-box"
                key={id}
                // href={{ pathname: `/${user_type}/${id}`, query: { data: JSON.stringify(props) } }}
                href={`/${user_type}/${id}`}
            >
                <div className="p-4">
                    <img src={thumbnail} />
                    <h5>{address}</h5>
                    <small>
                        <FontAwesomeIcon icon={faPesoSign} className="fa fa-md mr-2" />
                        {rate} php
                    </small>
                    <br />
                    <div className="d-flex justify-content-between">
                        <small>
                            <FontAwesomeIcon icon={faClock} className="fa fa-md mr-2" />
                            {time_start} - {time_end}
                        </small>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default ParkingSpotCard;