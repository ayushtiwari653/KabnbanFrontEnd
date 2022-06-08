import React from 'react'

function About() {
    return (
        <div>
<div class="aboutus-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Kanban</h2>
                        <p class="aboutus-text">The Kanban name comes from two Japanese words, “Kan” 看 meaning sign, and “Ban” 板 meaning a board.</p>
                        <p class="aboutus-text">A kanban board is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow). It can help both agile and DevOps teams establish order in their daily work.</p>
                        <a class="aboutus-more" href="https://en.wikipedia.org/wiki/Kanban_board">read more</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Visualize workflow:</h4>
                                    <p> Create a visual model of your team's workflow..</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Control work in progress: </h4>
                                    <p>Kanban method eliminates the need for constantly re-prioritizing or rescheduling tasks.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Custom workflows: </h4>
                                    <p>Create custom workflows, in which you can define stages, and make your work processes more flexible. You can also choose whom to subscribe on each stage of the workflow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

    )
}

export default About;