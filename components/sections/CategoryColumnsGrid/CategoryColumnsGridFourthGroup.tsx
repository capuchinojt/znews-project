'use client';

import React from 'react';
import CategoryColumnsGridBase from './CategoryColumnsGridBase';
import { useCategoryGroup } from '@/lib/hooks/useCategoryColumns';

interface CategoryColumnsGridFourthGroupProps {
  showTitle?: boolean;
  maxArticlesPerColumn?: number;
}

export default function CategoryColumnsGridFourthGroup({
  showTitle = false,
  maxArticlesPerColumn = 3,
}: CategoryColumnsGridFourthGroupProps) {
  const { groupData, loading, error } = useCategoryGroup('fourth-group');

  return (
    <CategoryColumnsGridBase
      groupId="fourth-group"
      title={showTitle ? groupData?.title : undefined}
      categories={groupData?.categories || []}
      loading={loading}
      error={error}
      maxArticlesPerColumn={maxArticlesPerColumn}
    />
  );
}
