import {
  profile,
  skills,
  projects,
  experience,
  achievements,
  getLocalProjectBySlug,
  getLocalProjects,
} from "../data/portfolioData";

export const getProfile = async () => profile;
export const getSkills = async () => skills;
export const getProjects = async () => getLocalProjects();
export const getExperience = async () => experience;
export const getAchievements = async () => achievements;
export const getProjectBySlug = async (slug) => {
  const project = getLocalProjectBySlug(slug);

  if (!project) {
    const error = new Error("Project not found");
    error.response = { status: 404 };
    throw error;
  }

  return project;
};
