import React from "react";

import { Progress, Tooltip } from "antd";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiAngular, SiJavascript } from "react-icons/si";

import "./style.css";

const Skills = () => {
  return (
    <div className="skills_section" id="skills">
      <section className="section skills">
        <div className="section-title">
          <h2>skills</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center skills-center">
          <article>
            <h3>front end</h3>

            <div className="skill">
              <div className="inline_icon">
                <Tooltip title="Html">
                  <FaHtml5 style={{ fontSize: 30 }} />
                </Tooltip>
                <Tooltip title="Css">
                  <FaCss3Alt style={{ fontSize: 30 }} />
                </Tooltip>
              </div>
              <Progress
                strokeWidth={18}
                strokeColor={{
                  from: "#108ee9",
                  to: "#87d068",
                }}
                percent={80}
                status="active"
              />
            </div>
            <div className="skill">
              <Tooltip title="TypeScript">
                <SiJavascript style={{ fontSize: 25 }} />
              </Tooltip>
              <Progress
                strokeWidth={18}
                strokeColor={{
                  from: "#108ee9",
                  to: "#87d068",
                }}
                percent={90}
                status="active"
              />
            </div>

            <div className="skill">
              <Tooltip title="Flutter">
                <FaFlutter style={{ fontSize: 30 }} />
              </Tooltip>
              <Progress
                strokeWidth={18}
                strokeColor={{
                  from: "#108ee9",
                  to: "#87d068",
                }}
                percent={50}
                status="active"
              />
            </div>
          </article>
          <article>
            <h3>back end</h3>
            <div className="skill">
              <Tooltip title="NodeJs">
                <FaNodeJs style={{ fontSize: 30 }} />
              </Tooltip>
              <Progress
                strokeWidth={18}
                strokeColor={{
                  from: "#108ee9",
                  to: "#87d068",
                }}
                percent={80}
                status="active"
              />
            </div>

            <div className="skill">
              <Tooltip title="Angular">
                <SiAngular style={{ fontSize: 30 }} />
              </Tooltip>
              <Progress
                strokeWidth={18}
                strokeColor={{
                  from: "#108ee9",
                  to: "#87d068",
                }}
                percent={80}
                status="active"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skills;
