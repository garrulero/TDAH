import { useState, useEffect } from 'react';

type SectionRecord = Record<string, boolean>;

const INITIAL_SECTIONS: SectionRecord = {
  'que-es': false,
  'dia-a-dia': false,
  'barreras': false,
  'estrategias': false,
  'familia': false
};

interface ExpandedSectionsState {
  expandedSections: SectionRecord;
  toggleSection: (id: string) => void;
}

export const useExpandedSections = (selectedProfile: string | null): ExpandedSectionsState => {
  const [expandedSections, setExpandedSections] = useState<SectionRecord>(INITIAL_SECTIONS);

  // Toggle single section expand state
  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Reset expanded sections whenever profile is changed to ensure clean index view first
  useEffect(() => {
    setExpandedSections(INITIAL_SECTIONS);
  }, [selectedProfile]);

  return {
    expandedSections,
    toggleSection,
  };
};
