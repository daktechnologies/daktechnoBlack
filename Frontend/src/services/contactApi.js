export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to send email");
    }

    return result;
  } catch (error) {
    throw error;
  }
};