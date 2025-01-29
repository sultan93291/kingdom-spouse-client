

const TermOfServices = () => {

    const clausetData = [
        {
            id: 1,
            title: "Clause 1",

            content: [
                {
                    id: "1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
                }
            ]
        },
        {
            id: 2,
            title: "Clause 2",
            content: [
                {
                    id: "2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."

                },
                {
                    id: "3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
                },
                {
                    id: "4",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
                }
            ]
        },
        {
            id: 3,
            title: "Clause 3",
            content: [
                {
                    id: "5",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
                },
                {
                    id: "6",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
                },
                {
                    id: "7",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
                }
            ]
        }
    ]
    // const
    return (
        <div className="flex flex-col gap-5">
            <div className=" ml-4">
                <h3 className="text-[#b27409] text-2xl font-bold font-['Inria Serif'] capitalize leading-normal">Term of Services</h3>
            </div>
            <div className="">
                <div className=" text-center ">
                    <h5 className="text-[#b27409] text-sm font-normal font-['Inter']">Last updated on 1/12/2021</h5>
                </div>
                <div className="flex flex-col gap-8">
                    {clausetData.map((clause) => (
                        <div key={clause.id} className="flex flex-col gap-2">
                            <div>
                                <h4 className="text-[#b27409] text-lg font-bold font-['Inter']">{clause.id}. {clause.title}</h4>
                            </div>
                            <div className=" flex flex-col gap-4">
                                {
                                    clause.content.map((content) => (
                                        <p key={content.id} className=" text-sm font-normal font-['Inter'] text-[#795D2B]">{content.content}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TermOfServices;