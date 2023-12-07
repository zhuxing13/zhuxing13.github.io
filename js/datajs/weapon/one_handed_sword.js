/* 单手剑 */

const oneWeaponAttributes = {
    '未装备':{
        roleProperties: '虚',       /* 武器属性 */
        weaponType: '单手剑',       /* 武器类型 */
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
    '无邪':{
        roleProperties: '光',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 8,                 
        addAtk: 10,               
        addDef: 8,               
        addHP: 14,                
        addHeal: 0,              
        basicAtk: 205,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 0,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '阿尔马达':{
        roleProperties: '水',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 15,                 
        addAtk: 10,               
        addDef: 6,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 190,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 12,              
        cdSkill: 8,            
        reduceDamage: 0,         
    },
    '方阵刹那':{
        roleProperties: '暗',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 3,                 
        addAtk: 0,               
        addDef: 18,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 215,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 0,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '红莲':{
        roleProperties: '火',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 6,                 
        addAtk: 10,               
        addDef: 10,               
        addHP: 10,                
        addHeal: 0,              
        basicAtk: 209,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 10,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '巴鲁蒙格':{
        roleProperties: '虚',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 2,                 
        addAtk: 10,               
        addDef: 14,               
        addHP: 8,                
        addHeal: 0,              
        basicAtk: 218,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 10,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '小星星':{
        roleProperties: '光',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 14,               
        addHP: 10,                
        addHeal: 0,              
        basicAtk: 215,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 10,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '天衣无缝':{
        roleProperties: '火',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 10,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 211,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 12,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '阿耳戈斯':{
        roleProperties: '光',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 0,                 
        addAtk: 10,               
        addDef: 12,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 220,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 0,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '光环':{
        roleProperties: '火',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 17,                 
        addAtk: 0,               
        addDef: 12,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 207,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 14,              
        cdSkill: 8,            
        reduceDamage: 0,         
    },
    '杜兰尔德':{
        roleProperties: '光',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 12,                 
        addAtk: 10,               
        addDef: 12,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 200,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 8,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '帕拉苏':{
        roleProperties: '火',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 7,                 
        addAtk: 10,               
        addDef: 13,               
        addHP: 13,                
        addHeal: 0,              
        basicAtk: 209,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 10,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '爱娜温':{
        roleProperties: '土',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 2,                 
        addAtk: 0,               
        addDef: 13,               
        addHP: 23,                
        addHeal: 0,              
        basicAtk: 218,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 8,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '米可（专）':{
        roleProperties: '虚',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 16,                 
        addAtk: 0,               
        addDef: 8,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 211,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 16,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '达伊之剑':{
        roleProperties: '虚',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 8,                 
        addAtk: 10,               
        addDef: 14,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 206,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 8,              
        cdSkill: 8,            
        reduceDamage: 0,         
    },
    '村雨':{
        roleProperties: '火',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 15,                 
        addAtk: 10,               
        addDef: 6,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 192,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 15,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
    '利贝拉':{
        roleProperties: '虚',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 8,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 209,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 12,              
        cdSkill: 8,            
        reduceDamage: 0,         
    },
    '沉默':{
        roleProperties: '土',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 10,               
        addHP: 10,                
        addHeal: 0,              
        basicAtk: 211,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 10,              
        cdSkill: 0,            
        reduceDamage: 30,         
    },
    '真理':{
        roleProperties: '光',    
        weaponType: '单手剑',    
        weaponCoefficient: 3,    
        crit: 13,                 
        addAtk: 0,               
        addDef: 6,               
        addHP: 8,                
        addHeal: 0,              
        basicAtk: 195,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 10,              
        cdSkill: 10,            
        reduceDamage: 0,         
    },
}