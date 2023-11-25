/* 步枪 */

const rifleWeaponAttributes = {
    '未装备':{
        roleProperties: '虚',       /* 武器属性 */
        weaponType: '步枪',         /* 武器类型 */
        weaponCoefficient: 2,       /* 武器系数 */
        crit: 0,                    /* 自带暴击 */
        addAtk: 0,                  /* 攻击加成 */
        addDef: 0,                  /* 防御加成 */
        addHP: 0,                   /* 生命加成 */
        addHeal: 0,                 /* 回血加成 */
        basicAtk: 0,                /* 1级攻击白值 */
        basicDef: 0,                /* 1级防御白值 */
        basicHeal: 0,               /* 1级回血值白值 */
        skill: 0,                   /* 技伤 */
        cdSkill: 0,                 /* cd */
        reduceDamage: 0,            /* 伤害减免 */
    },
    '无边绝望':{
        roleProperties: '暗',    
        weaponType: '步枪',    
        weaponCoefficient: 2.5,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 15,               
        addHP: 15,                
        addHeal: 0,              
        basicAtk: 238,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '终结者':{
        roleProperties: '土',    
        weaponType: '步枪',    
        weaponCoefficient: 2,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 311,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 16,              
        cdSkill: 0,            
        reduceDamage: 0,         
    },
    '宇宙毁灭者':{
        roleProperties: '虚',    
        weaponType: '步枪',    
        weaponCoefficient: 10,    
        crit: 3,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 64,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 16,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '欧米伽冲锋枪':{
        roleProperties: '光',    
        weaponType: '步枪',    
        weaponCoefficient: 2,    
        crit: 6,                 
        addAtk: 10,               
        addDef: 12,               
        addHP: 24,                
        addHeal: 0,              
        basicAtk: 309,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 18,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '反抗':{
        roleProperties: '暗',    
        weaponType: '步枪',    
        weaponCoefficient: 2,    
        crit: 2,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 22,                
        addHeal: 0,              
        basicAtk: 322,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 24,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '涅墨西斯':{
        roleProperties: '水',    
        weaponType: '步枪',    
        weaponCoefficient: 4,    
        crit: 0,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 164,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 22,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '湛蓝鱼矛':{
        roleProperties: '水',    
        weaponType: '步枪',    
        weaponCoefficient: 5,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 125,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 22,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    'R模式·方阵刹那':{
        roleProperties: '暗',    
        weaponType: '步枪',    
        weaponCoefficient: 4,    
        crit: 6,                 
        addAtk: 10,               
        addDef: 12,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 155,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 16,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '黑曼巴':{
        roleProperties: '虚',    
        weaponType: '步枪',    
        weaponCoefficient: 5/1.1,    
        crit: 12,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 129,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 0,            
        reduceDamage: 0,         
    },
    '蜜獾手枪':{                        /* 蜜獾（huan）手枪 */
        roleProperties: '土',    
        weaponType: '步枪',    
        weaponCoefficient: 1.875,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 319,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 18,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '维涅特（专）':{
        roleProperties: '暗',    
        weaponType: '步枪',    
        weaponCoefficient: 2.5,    
        crit: 3,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 18,                
        addHeal: 16,              
        basicAtk: 251,               
        basicDef: 0,               
        basicHeal: 226,               
        skill: 22,              
        cdSkill: 0,            
        reduceDamage: 0,         
    },
    '捣蛋鬼':{
        roleProperties: '火',    
        weaponType: '步枪',    
        weaponCoefficient: 100/53,    
        crit: 2,                 
        addAtk: 10,               
        addDef: 15,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 335,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '无情':{
        roleProperties: '土',    
        weaponType: '步枪',    
        weaponCoefficient: 80/13,    
        crit: 6,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 102,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 0,              
        cdSkill: 16,            
        reduceDamage: 35,         
    },
    '蓝玫瑰':{
        roleProperties: '水',    
        weaponType: '步枪',    
        weaponCoefficient: 600/89,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 88,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 15,            
        reduceDamage: 0,         
    },
    '神奇激光风暴':{
        roleProperties: '光',    
        weaponType: '步枪',    
        weaponCoefficient: 120/23,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 0,               
        addHP: 16,                
        addHeal: 0,              
        basicAtk: 118,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '协商者':{
        roleProperties: '土',    
        weaponType: '步枪',    
        weaponCoefficient: 659/126,    
        crit: 30,                 
        addAtk: 0,               
        addDef: 8,               
        addHP: 10,                
        addHeal: 0,              
        basicAtk: 105,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 24,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    
}