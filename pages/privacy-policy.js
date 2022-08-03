import InnerPAgeBanner from "./components/innerPAgeBanner";

export default function PrivacyPolicy() {
    return (
        <>
            <InnerPAgeBanner />

            {/* Content Section End*/}
            <section>
                <div className='container md:w-[1020px] mx-auto py-20'>
                    <div>
                        <h3 className='text-5xl font-bold text-skin-primary mb-10'>Ptivacy Policy</h3>

                        <p className="text-xl font-normal text-skin-muted mb-5 italic">Updated at 2022-07-12</p>
                        <p className="text-xl font-normal text-skin-muted mb-5">Fundgazer ("we," "our" or “us") is committed to protecting your privacy. This Privacy Policy explains how your personal information collected, used, and disclosed by fundgazer This Privacy Policy applies to our website, www.fundgazer.com and its associated sub domains (collectively, our "Service") By accessing or using our Service, you that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.</p>
                        <div>
                            <p className="text-xl text-skin-dark mb-5 font-bold">What Information Do We Collect?</p>
                            <p className="text-xl font-normal text-skin-muted mb-5">We collect information from you when you visit our service, register, place an order subscribe to our newsletter, respond to a survey or fill out a form</p>
                            <p className="text-xl font-normal text-skin-muted mb-5">Name/username <br></br> Email Addresses <br></br> Location <br></br> Age</p>
                            <p className="text-xl font-normal text-skin-muted mb-5">We also collect information from mobile devices for a better user experience, although these features are completely optional:</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Content Section End*/}
        </>
    )
}
