
export async function get<T>(url: string): Promise<T | null> {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  