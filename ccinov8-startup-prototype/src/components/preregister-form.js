import { useRouter } from 'next/router';

const PreregisterForm = (props) => {
    const signUpType = props.signUpType;
    const redirectMessage = props.redirectMessage;

    const router = useRouter();

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, birthdate, email, contact, userType };
        console.log(user);
        fetch('/api/preregister', {
            method: 'POST',
            body: JSON.stringify(user),
        }).then(() => {
            router.push('/success');
        });
    };

    return (
        <form className="col-6 my-auto" onSubmit={handleSubmit}>
            <div className="form-group d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faUser} className="fa fa-lg mr-4" />
                <input type="text" className="form-control" name="name" placeholder="Full Name" required="required" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faCakeCandles} className="fa fa-lg mr-4" />
                <input type="date" className="form-control" name="birthdate" placeholder="Date of Birth" required="required" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </div>

            <div className="form-group d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="fa fa-lg mr-4" />
                <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faPhone} className="fa fa-lg mr-4" />
                <input type="tel" className="form-control" name="contact" placeholder="Contact Number" required="required" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block mb-2">
                    PREREGISTER
                </button>
                <Link href={`../signup/${signUpType}`}> {redirectMessage} </Link>
            </div>
        </form>
    );
};

export default PreregisterForm;
