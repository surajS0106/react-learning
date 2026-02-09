export const CandidateProfile = () => {
  const candidate = {
    name: "John Doe",
    experience: "5 years in software development",
    skills: ["JavaScript", "React", "Node.js"],
    yearsOfExperience: 5,
    isAvailable: true
  };
  return (
    <div>
        <h2>Name: {candidate.name}</h2>        
        <p>Experience: {candidate.experience}</p>
        <p>Skills: {candidate.skills.join(', ')}</p>
        <p>Years of Experience: {candidate.yearsOfExperience}</p>
        <p>Availability: {candidate.isAvailable? "Available" : "Not Available"}</p>
    </div>
  );
}