import ProjectCard from "@/components/ProjectCard"

const Work = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8'>
            {/* <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold my-5'>
                    blogs
                </p>

            </div> */}
            <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold my-5'>
                    projects
                </p>
                <div className='flex flex-row flex-wrap'>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
                        <div>
                            <p className='my-0.5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
                            </p>
                        </div>
                    </ProjectCard>
                </div>
            </div>
        </div>
    )
}
export default Work