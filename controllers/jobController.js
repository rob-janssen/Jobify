import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "Apple", position: "front-end" },
  { id: nanoid(), company: "Google", position: "back-end" },
  { id: nanoid(), company: "Microsoft", position: "front-end" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(400)
      .json({ Message: "Please provider company and position" });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    throw new Error("No job with that ID");
    // return res.status(404).json({ message: `No job with ID ${id} found.` });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(4004).json({ Message: "Please provide company and position." });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with ID ${id} found.` });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ Message: "Job modified.", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with ID ${id} found.` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({ Message: "Job deleted.", job });
};
