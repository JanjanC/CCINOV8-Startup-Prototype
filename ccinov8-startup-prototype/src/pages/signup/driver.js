import PreregisterForm from '@/components/preregister-form';
import useLog from '@/hooks/useLog';

export default function Driver() {
    useLog('Driver Sign Up Page');

    return (
        <>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <h2 className="text-center py-4">LOOK FOR A PARKING SPACE</h2>
                        <div className="row">
                            <PreregisterForm
                                type="Driver"
                                redirectType="owner"
                                redirectMessage="WANT TO RENT OUT YOUR PARKING SPACES INSTEAD?"
                            ></PreregisterForm>

                            <div className="col-6">
                                <img src="/images/drivers.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}